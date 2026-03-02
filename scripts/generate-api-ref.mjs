#!/usr/bin/env node
/**
 * Generates API Reference documentation from swagger.json
 * - One markdown file per tag
 * - Request/response JSON examples (syntax highlighted)
 * - curl examples for each endpoint
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SWAGGER_PATH = path.join(__dirname, '../swagger.json');
const OUTPUT_DIR = path.join(__dirname, '../api-reference');
const BASE_URL = 'https://{project}.atlascms.io';

// Only include APIs with these tags. Admin tag is split by path into sub-sections.
const ALLOWED_TAGS = [
  'Contents',
  'Models',
  'Media Library',
  'Assets',
  'Users',
  'Roles',
  'Audits',
];

// Map Admin endpoints to sub-sections by path prefix
const ADMIN_PATH_MAP = {
  'api-keys': 'Admin - API Keys',
  'webhooks': 'Admin - Webhooks',
  'metrics': 'Admin - Project',
  'reports': 'Admin - Project',
};

// Excluded endpoints (method, path)
const EXCLUDED_ENDPOINTS = [
  ['GET', '/admin/ui/settings'],
  ['GET', '/{project}/admin/subscriptions/current'],
  ['GET', '/{project}/admin/subscriptions/plans'],
  ['POST', '/{project}/admin/subscriptions/checkout'],
  ['DELETE', '/{project}'],
];

function isExcluded(method, pathKey) {
  return EXCLUDED_ENDPOINTS.some(([m, p]) => m === method && p === pathKey);
}

// Descriptions for each API endpoint (summary -> description)
const API_DESCRIPTIONS = {
  'Get Contents': 'Retrieves a paginated list of content entries for the specified model. Supports filtering, sorting, and locale selection.',
  'Create Content': 'Creates a new content entry in the specified model. Requires locale and attributes matching the model schema.',
  'Get Single Content': 'Retrieves the single content entry for models configured with "single collection" (e.g. settings, config).',
  'Count Contents': 'Returns the total count of content entries matching the filter criteria, useful for pagination.',
  'Get Content': 'Retrieves a single content entry by ID. Supports resolving media and relations to full objects.',
  'Update Content': 'Updates an existing content entry. Acts as a patch for attributes—only provided fields are updated.',
  'Delete Content': 'Permanently deletes a content entry by ID.',
  'Change the status of a content': 'Publishes or unpublishes a content entry. Available when the model has stage mode enabled.',
  'Create Localized version of content': 'Creates a new localized version of a content entry for a specified locale.',
  'Duplicate Content': 'Creates a copy of an existing content entry, optionally including all localized versions.',
  'Delete All Contents': 'Deletes all content entries in the specified model. Use with caution.',
  'List Models': 'Returns the list of content models defined in the project.',
  'Create Model': 'Creates a new content model with the specified fields and configuration.',
  'Get Model': 'Retrieves a single model by ID including its field definitions.',
  'Update Model': 'Updates an existing model. Changes apply immediately to content.',
  'Delete Model': 'Deletes a model and all its content. This action cannot be undone.',
  'List Components': 'Returns the list of reusable components defined in the project.',
  'Create Component': 'Creates a new content component that can be embedded in models.',
  'Get Component': 'Retrieves a single component by ID including its field definitions.',
  'Update Component': 'Updates an existing component.',
  'Delete Component': 'Deletes a component. Models using it must be updated first.',
  'Get Folders': 'Returns the folder structure of the media library for organizing assets.',
  'Create Folder': 'Creates a new folder in the media library.',
  'Delete Folder': 'Deletes a folder and all its contents. Use with caution.',
  'Rename Folder': 'Renames an existing folder in the media library.',
  'Move Folder': 'Moves a folder to a different parent folder.',
  'Get Medias': 'Retrieves a paginated list of media assets. Supports filtering by folder and search.',
  'Get Media': 'Retrieves a single media asset by ID.',
  'Delete Media': 'Permanently deletes a media asset.',
  'Set Media Tags': 'Updates the tags associated with a media asset.',
  'Upload File (form-data)': 'Uploads a new file to the media library. Use multipart/form-data with the file field.',
  'Move Media': 'Moves a media asset to a different folder.',
  'Get the original asset': 'Returns the original asset file (image, document, or video) by ID and filename.',
  'Get the original video': 'Returns the original video file for streaming or download.',
  'Get Audits': 'Retrieves the audit log for the project or tenant. Useful for tracking changes and compliance.',
  'Get Api Keys': 'Lists all API keys for the project. API keys are used to authenticate requests.',
  'Create Api Key': 'Creates a new API key with configurable permissions and optional expiry.',
  'Get Api Key': 'Retrieves a single API key by ID.',
  'Update Api Key': 'Updates an API key\'s permissions or expiry date.',
  'Delete Api Key': 'Revokes and deletes an API key. Requests using this key will fail.',
  'Get Projects': 'Lists all projects accessible to the authenticated account.',
  'Create Project': 'Creates a new project. Each project is an independent content environment.',
  'Get Project': 'Retrieves project details and configuration.',
  'Update Project': 'Updates project settings such as name and description.',
  'Get Project Settings': 'Retrieves the project settings including endpoints and localization config.',
  'Update Project Settings': 'Updates project settings. Changes may affect API behavior.',
  'Get Project\'s Metrics': 'Returns usage metrics for the project (API calls, storage, etc.).',
  'Get Counters': 'Returns counter statistics for the project.',
  'Get Content Stats': 'Returns content statistics per model (published/unpublished counts).',
  'Get User Roles': 'Lists all user roles defined in the project.',
  'Create User Role': 'Creates a new role with configurable permissions.',
  'Update User Role': 'Updates an existing role\'s permissions.',
  'Delete User Role': 'Deletes a role. Users with this role must be reassigned.',
  'User Permission Set': 'Returns the list of available permissions for assigning to roles.',
  'Get Webhooks': 'Lists all webhooks configured for the project.',
  'Create Webhook': 'Creates a new webhook to receive events. Configure URL, events, and authentication.',
  'Get Webhook': 'Retrieves a single webhook configuration by ID.',
  'Update Webhook': 'Updates an existing webhook\'s configuration.',
  'Delete Webhook': 'Removes a webhook. It will no longer receive events.',
  'Login User': 'Authenticates a user with username and password. Returns an access token for API requests.',
  'Get Users': 'Lists all users in the project with pagination.',
  'Count Users': 'Returns the total count of users in the project.',
  'Get User': 'Retrieves a single user by ID.',
  'Update User': 'Updates user attributes such as name or status.',
  'Delete User': 'Removes a user from the project.',
  'Create User': 'Creates a new user in the project.',
  'Change the user status active/inactive': 'Enables or disables a user account. Inactive users cannot log in.',
  'Change Password': 'Changes the password for a user. Requires admin privileges.',
};

function getApiDescription(summary) {
  return API_DESCRIPTIONS[summary] || `Performs the operation: ${summary}.`;
}

// Section descriptions (shown under the main title of each API Reference page)
const SECTION_DESCRIPTIONS = {
  'Contents': 'APIs for managing content entries. Create, read, update, and delete content; publish/unpublish; duplicate; and manage localized versions.',
  'Models': 'APIs for defining content models and components. Models define the structure of your content; components are reusable building blocks.',
  'Media Library': 'APIs for managing the media library: folders, uploads, and asset metadata. Organize files, set tags, and move assets between folders.',
  'Assets': 'APIs for retrieving the actual asset files (images, documents, videos) by ID. Use these URLs to serve media in your frontend.',
  'Users': 'APIs for managing users within a project. Create, update, and delete users; manage authentication and account status.',
  'Roles': 'APIs for defining user roles and permissions. Control what each role can access in the project.',
  'Audits': 'APIs for retrieving the audit log. Track changes, who made them, and when for compliance and debugging.',
  'Admin - Project': 'APIs for project administration: settings, metrics, counters, and content statistics.',
  'Admin - API Keys': 'APIs for managing API keys. Create, update, and revoke keys used to authenticate API requests.',
  'Admin - Webhooks': 'APIs for configuring webhooks. Receive real-time notifications when content or other resources change.',
};

function getSectionDescription(tag) {
  return SECTION_DESCRIPTIONS[tag] || '';
}

// Paths to exclude from Admin (no section for these)
const ADMIN_EXCLUDED_PATHS = ['memberships', 'memberhips/roles', 'subscriptions', 'ui/settings'];

function resolveAdminTag(pathKey) {
  if (!pathKey.includes('/admin/')) return null;
  const afterAdmin = pathKey.split('/admin/')[1] || '';
  if (ADMIN_EXCLUDED_PATHS.some(p => afterAdmin.startsWith(p))) return null;
  for (const [prefix, tag] of Object.entries(ADMIN_PATH_MAP)) {
    if (afterAdmin.startsWith(prefix)) return tag;
  }
  return 'Admin - Project'; // default for other admin paths
}

const swagger = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf8'));
const schemas = swagger.components?.schemas || {};
const paths = swagger.paths || {};

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s*-\s*/g, '-') // "Admin - Project" -> "admin-project"
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-'); // collapse multiple hyphens
}

function resolveRef(ref) {
  if (!ref?.startsWith('#/components/schemas/')) return null;
  const name = ref.split('/').pop();
  return schemas[name] || null;
}

function generateExampleFromSchema(schema, depth = 0, seen = new Set()) {
  if (!schema || depth > 5) return null;
  if (schema.$ref) {
    const refName = schema.$ref.split('/').pop();
    if (seen.has(refName)) return {}; // Circular ref
    seen.add(refName);
    const resolved = resolveRef(schema.$ref);
    const result = generateExampleFromSchema(resolved, depth, seen);
    seen.delete(refName);
    return result;
  }
  if (schema.enum) return schema.enum[0];
  switch (schema.type) {
    case 'string':
      if (schema.format === 'date-time') return '2024-01-15T12:00:00Z';
      if (schema.format === 'uuid') return '550e8400-e29b-41d4-a716-446655440000';
      if (schema.format === 'email') return 'user@example.com';
      return 'string';
    case 'integer':
    case 'number':
      return schema.type === 'integer' ? 0 : 0.0;
    case 'boolean':
      return true;
    case 'array': {
      const itemSchema = schema.items?.$ref ? resolveRef(schema.items.$ref) : schema.items;
      const item = generateExampleFromSchema(itemSchema || { type: 'string' }, depth + 1, seen);
      return item !== null && depth < 3 ? [item] : [];
    }
    case 'object': {
      const obj = {};
      const props = schema.properties || {};
      const required = new Set(schema.required || []);
      for (const [key, propSchema] of Object.entries(props)) {
        const ex = generateExampleFromSchema(propSchema, depth + 1, seen);
        if (ex !== null || required.has(key)) {
          obj[key] = ex !== null ? ex : 'string';
        }
      }
      return Object.keys(obj).length ? obj : { key: 'value' };
    }
    default:
      return null;
  }
}

function getRequestBodySchema(op) {
  const content = op.requestBody?.content;
  if (!content) return null;
  const json = content['application/json'] || content['application/*+json'] || content['text/json'];
  return json?.schema || null;
}

function getResponseSchema(op) {
  const resp = op.responses?.['200'];
  if (!resp?.content) return null;
  const json = resp.content['application/json'] || resp.content['text/plain'] || resp.content['text/json'];
  return json?.schema || null;
}

function buildCurl(method, path, params = {}, hasBody = false, body = null) {
  let url = BASE_URL + path;
  const pathParams = {};
  const queryParams = [];
  const headers = ['-H "Content-Type: application/json"', '-H "Accept: application/json"'];

  for (const p of params) {
    if (p.in === 'path' && p.required) {
      const placeholder = p.name === 'project' ? 'my-project' : p.name === 'id' ? 'item-id' : p.name === 'type' ? 'posts' : p.name === 'name' ? 'filename' : 'value';
      pathParams[p.name] = placeholder;
    } else if (p.in === 'query' && p.required) {
      queryParams.push(`${p.name}=value`);
    }
  }

  for (const [k, v] of Object.entries(pathParams)) {
    url = url.replace(`{${k}}`, v);
  }
  if (queryParams.length) url += '?' + queryParams.join('&');

  const needsAuth = !path.startsWith('/login') && !path.startsWith('/accounts/register') && !path.includes('/password/forgot') && !path.includes('/password/reset') && !path.includes('/configs/');
  if (needsAuth) headers.unshift('-H "Authorization: Bearer YOUR_ACCESS_TOKEN"');

  let curl = `curl -X ${method} "${url}"`;
  if (headers.length) curl += ' \\\n  ' + headers.join(' \\\n  ');
  if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && hasBody) {
    const bodyJson = JSON.stringify(body || {});
    curl += ` \\\n  -d '${bodyJson.replace(/'/g, "'\\''")}'`;
  }
  return curl;
}

// Group endpoints by tag (filtered)
const groups = {};
for (const [pathKey, pathItem] of Object.entries(paths)) {
  for (const [method, op] of Object.entries(pathItem)) {
    if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue;
    const methodUpper = method.toUpperCase();
    if (isExcluded(methodUpper, pathKey)) continue;
    const tags = op.tags || ['Other'];
    for (const tag of tags) {
      let resolvedTag = tag;
      if (tag === 'Admin') {
        resolvedTag = resolveAdminTag(pathKey);
        if (!resolvedTag) continue;
      } else if (!ALLOWED_TAGS.includes(tag)) {
        continue;
      }
      if (!groups[resolvedTag]) groups[resolvedTag] = [];
      const reqSchema = getRequestBodySchema(op);
      const respSchema = getResponseSchema(op);
      groups[resolvedTag].push({
        path: pathKey,
        method: method.toUpperCase(),
        summary: op.summary || '',
        description: getApiDescription(op.summary || ''),
        parameters: op.parameters || [],
        requestBody: op.requestBody,
        requestExample: reqSchema ? generateExampleFromSchema(reqSchema) : null,
        responseExample: respSchema ? generateExampleFromSchema(respSchema) : null,
      });
    }
  }
}

// Add Projects tag for /{project} and /projects - these map to Admin -> Project (exclude DELETE /{project})
const projectsPaths = ['/{project}', '/projects'];
for (const [pathKey, pathItem] of Object.entries(paths)) {
  if (!projectsPaths.includes(pathKey)) continue;
  for (const [method, op] of Object.entries(pathItem)) {
    if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue;
    const methodUpper = method.toUpperCase();
    if (isExcluded(methodUpper, pathKey)) continue;
    const tags = op.tags || [];
    if (tags.includes('Projects')) {
      const resolvedTag = 'Admin - Project';
      if (!groups[resolvedTag]) groups[resolvedTag] = [];
      const reqSchema = getRequestBodySchema(op);
      const respSchema = getResponseSchema(op);
      groups[resolvedTag].push({
        path: pathKey,
        method: methodUpper,
        summary: op.summary || '',
        description: getApiDescription(op.summary || ''),
        parameters: op.parameters || [],
        requestBody: op.requestBody,
        requestExample: reqSchema ? generateExampleFromSchema(reqSchema) : null,
        responseExample: respSchema ? generateExampleFromSchema(respSchema) : null,
      });
    }
  }
}

// Create output dir and sidebar items
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
const sidebarItems = [{ text: 'Overview', link: '/api-reference/' }];

// Sort tags
const tagOrder = [
  'Contents',
  'Models',
  'Media Library',
  'Assets',
  'Users',
  'Roles',
  'Audits',
  'Admin - Project',
  'Admin - API Keys',
  'Admin - Webhooks',
];
const sortedTags = [...new Set([...tagOrder.filter(t => groups[t]), ...Object.keys(groups).filter(t => !tagOrder.includes(t))])];

for (const tag of sortedTags) {
  const endpoints = groups[tag];
  if (!endpoints?.length) continue;

  const slug = slugify(tag);
  const filename = slug === 'overview' ? 'index' : slug;
  const filepath = path.join(OUTPUT_DIR, `${filename}.md`);

  const sectionDesc = getSectionDescription(tag);
  let md = `---
title: ${tag}
description: API Reference - ${tag}
---

# ${tag}

${sectionDesc ? sectionDesc + '\n\n' : ''}`;

  for (const ep of endpoints) {
    const badgeClass = `http-badge http-badge-${ep.method.toLowerCase()}`;
    md += `## ${ep.summary} <span class="${badgeClass}">${ep.method}</span>\n\n`;
    md += `${ep.description}\n\n`;
    md += `\`\`\`\n${ep.method} ${ep.path}\n\`\`\`\n\n`;

    // Path/Query Parameters
    if (ep.parameters?.length) {
      md += `### Path Parameters\n\n`;
      const pathParams = ep.parameters.filter(p => p.in === 'path');
      const queryParams = ep.parameters.filter(p => p.in === 'query');
      if (pathParams.length) {
        md += `| Name | Type | Required | Description |\n|------|------|----------|-------------|\n`;
        for (const p of pathParams) {
          md += `| \`${p.name}\` | ${p.schema?.type || '-'} | ${p.required ? 'Yes' : 'No'} | ${p.description || '-'} |\n`;
        }
        md += '\n';
      }
      if (queryParams.length) {
        md += `### Query Parameters\n\n`;
        md += `| Name | Type | Required | Description |\n|------|------|----------|-------------|\n`;
        for (const p of queryParams) {
          md += `| \`${p.name}\` | ${p.schema?.type || '-'} | ${p.required ? 'Yes' : 'No'} | ${p.description || '-'} |\n`;
        }
        md += '\n';
      }
    }

    // Request Body
    if (ep.requestBody && ep.requestExample) {
      md += `### Request Body\n\n`;
      md += `\`\`\`json\n${JSON.stringify(ep.requestExample, null, 2)}\n\`\`\`\n\n`;
    } else if (ep.requestBody) {
      md += `### Request Body\n\n`;
      md += `JSON object. See schema in OpenAPI spec for details.\n\n`;
    }

    // Response
    if (ep.responseExample) {
      md += `### Response (200 OK)\n\n`;
      md += `\`\`\`json\n${JSON.stringify(ep.responseExample, null, 2)}\n\`\`\`\n\n`;
    }

    // curl example
    const hasBody = ['POST', 'PUT', 'PATCH'].includes(ep.method) && ep.requestBody;
    const curl = buildCurl(ep.method, ep.path, ep.parameters, hasBody, ep.requestExample);
    md += `### cURL Example\n\n`;
    md += `\`\`\`bash\n${curl}\n\`\`\`\n\n`;
  }

  fs.writeFileSync(filepath, md);
  if (slug !== 'overview') {
    sidebarItems.push({ text: tag, link: `/api-reference/${slug}` });
  }
}

// Write Overview index page
const indexLinks = sidebarItems
  .filter(s => s.link !== '/api-reference/')
  .map(s => `- [${s.text}](${s.link})`)
  .join('\n');

const indexMd = `---
title: API Reference
description: Complete reference of all Atlas CMS API endpoints
---

# API Reference

Complete reference of all Atlas CMS API endpoints. All endpoints require authentication via Bearer token unless otherwise noted.

**Base URL:** \`${BASE_URL}\` (replace \`{project}\` with your project instance name)

## API Sections

${indexLinks}
`;
fs.writeFileSync(path.join(OUTPUT_DIR, 'index.md'), indexMd);

// Write sidebar config for import
fs.writeFileSync(
  path.join(OUTPUT_DIR, '_sidebar.json'),
  JSON.stringify(sidebarItems, null, 2)
);

console.log(`API Reference generated: ${Object.keys(groups).length} tags, ${sidebarItems.length} pages`);
console.log('Sidebar items:', sidebarItems.map(s => s.text).join(', '));
