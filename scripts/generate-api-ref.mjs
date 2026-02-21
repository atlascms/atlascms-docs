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
const SWAGGER_PATH = '/Users/simonebelia/Desktop/swagger.json';
const OUTPUT_DIR = path.join(__dirname, '../api-reference');
const BASE_URL = 'https://{project}.atlascms.io';

const swagger = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf8'));
const schemas = swagger.components?.schemas || {};
const paths = swagger.paths || {};

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
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

// Group endpoints by tag
const groups = {};
for (const [pathKey, pathItem] of Object.entries(paths)) {
  for (const [method, op] of Object.entries(pathItem)) {
    if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue;
    const tags = op.tags || ['Other'];
    for (const tag of tags) {
      if (!groups[tag]) groups[tag] = [];
      const reqSchema = getRequestBodySchema(op);
      const respSchema = getResponseSchema(op);
      const reqSchemaRef = reqSchema?.$ref ? resolveRef(reqSchema.$ref) : reqSchema;
      const respSchemaRef = respSchema?.$ref ? resolveRef(respSchema.$ref) : respSchema;
      groups[tag].push({
        path: pathKey,
        method: method.toUpperCase(),
        summary: op.summary || '',
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

// Sort tags (Accounts first, then alphabetical for rest)
const tagOrder = ['Accounts', 'API Tokens', 'Contents', 'Models', 'Media Library', 'Assets', 'Projects', 'Project Memberships', 'Users', 'Roles', 'Webhooks', 'Audits', 'Configurations', 'Reports', 'Subscriptions', 'Temp'];
const sortedTags = [...new Set([...tagOrder.filter(t => groups[t]), ...Object.keys(groups).filter(t => !tagOrder.includes(t))])];

for (const tag of sortedTags) {
  const endpoints = groups[tag];
  if (!endpoints?.length) continue;

  const slug = slugify(tag);
  const filename = slug === 'overview' ? 'index' : slug;
  const filepath = path.join(OUTPUT_DIR, `${filename}.md`);

  let md = `---
title: ${tag}
description: API Reference - ${tag}
---

# ${tag}

`;

  for (const ep of endpoints) {
    md += `## ${ep.summary}\n\n`;
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

    md += `---\n\n`;
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
