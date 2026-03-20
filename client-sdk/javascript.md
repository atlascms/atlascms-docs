# JavaScript / TypeScript SDK

The Atlas CMS TypeScript SDK provides a fully-typed, isomorphic client that works in browsers and server-side runtimes (Node.js, BFF layers). It wraps the REST API and exposes a fluent query builder to simplify filtering, sorting, and pagination.

## Source Code

[GitHub - atlascms/atlascms-sdk-js](https://github.com/atlascms/atlascms-sdk-js)

## Installation

Install the package from the npm registry:

```bash
npm install atlascms-sdk-js
```

Or with yarn:

```bash
yarn add atlascms-sdk-js
```

## Initialize the Client

To initialize the client you need an API Key and a Project ID.

To get these credentials, check the documentation [here](/admin-ui/settings#api-tokens) and [here](/admin-ui/settings#general).

```typescript
import { createAtlasCmsClient } from "atlascms-sdk-js";

const client = createAtlasCmsClient({
  projectId: "your-project-id",
  apiKey: "YOUR_BEARER_TOKEN"
});
```

The SDK uses `https://api.atlascms.io` as the default base URL. Derived endpoints:

| Type    | URL                                           |
|---------|-----------------------------------------------|
| REST    | `https://api.atlascms.io/{projectId}`         |
| GraphQL | `https://api.atlascms.io/{projectId}/graphql` |

### Client Configuration

```typescript
type AtlasClientConfig = {
  projectId: string;
  apiKey: string;
  /** Defaults to "https://api.atlascms.io" */
  baseUrl?: string;
  fetchFn?: typeof fetch;
  defaultHeaders?: HeadersInit;
};
```

## Modules

The client exposes the following modules:

| Module | Description |
|--------|-------------|
| `client.contents` | Create, read, update, delete, and publish content items |
| `client.media` | Upload and manage media library assets |
| `client.users` | Manage project users |
| `client.roles` | Manage roles and permissions |
| `client.models` | Manage content models |
| `client.components` | Manage shared components |
| `client.graphql` | Execute GraphQL operations |

### `client.contents`

| Method | Description |
|--------|-------------|
| `list(type, query?, options?)` | List contents of a given type |
| `getById(type, id, query?, options?)` | Get a single content by ID |
| `getSingle(type, query?, options?)` | Get a singleton content |
| `count(type, query?, options?)` | Count contents |
| `create(type, payload, options?)` | Create a new content |
| `update(type, id, payload, options?)` | Update an existing content |
| `remove(type, id, options?)` | Delete a content |
| `changeStatus(type, id, status, options?)` | Publish or unpublish a content |
| `createTranslation(type, id, locale?, options?)` | Create a translation copy |
| `duplicate(type, id, locales?, options?)` | Duplicate a content |
| `updateSeo(type, id, payload, options?)` | Update SEO metadata |

### `client.media`

| Method | Description |
|--------|-------------|
| `list(query?, options?)` | List media items |
| `getById(id, options?)` | Get a media item by ID |
| `upload(input, options?)` | Upload a file |
| `setTags(id, tags, options?)` | Set tags on a media item |
| `remove(id, options?)` | Delete a media item |

### `client.users`

| Method | Description |
|--------|-------------|
| `list(query?, options?)` | List users |
| `count(query?, options?)` | Count users |
| `getById(id, options?)` | Get a user by ID |
| `create(payload, options?)` | Register a new user |
| `update(id, payload, options?)` | Update a user |
| `remove(id, options?)` | Delete a user |
| `changeStatus(id, isActive, options?)` | Activate or deactivate a user |
| `changePassword(id, password, options?)` | Change a user's password |

### `client.roles`

| Method | Description |
|--------|-------------|
| `list(options?)` | List roles |
| `create(payload, options?)` | Create a role |
| `update(id, payload, options?)` | Update a role |
| `remove(id, options?)` | Delete a role |
| `getPermissions(options?)` | Get all available permissions |

### `client.models`

| Method | Description |
|--------|-------------|
| `list(query?, options?)` | List content models |
| `getById(id, options?)` | Get a model by ID |
| `create(payload, options?)` | Create a model |
| `update(payload, options?)` | Update a model |
| `remove(id, options?)` | Delete a model |
| `publish(id, options?)` | Publish a model |
| `unpublish(id, options?)` | Unpublish a model |

### `client.components`

| Method | Description |
|--------|-------------|
| `list(query?, options?)` | List components |
| `getById(id, options?)` | Get a component by ID |
| `create(payload, options?)` | Create a component |
| `update(payload, options?)` | Update a component |
| `remove(id, options?)` | Delete a component |

### `client.graphql`

| Method | Description |
|--------|-------------|
| `execute({ query, variables?, operationName? }, options?)` | Execute a GraphQL operation |

```typescript
const response = await client.graphql.execute<{ pages: Page[] }>({
  query: `query GetPages { pages { id title } }`
});
```

## Query Builder

To simplify the creation of query parameters, the SDK provides fluent query builders for contents, media, and users. All builders support these common methods:

| Method | Description |
|--------|-------------|
| `page(number)` | Set the page number |
| `size(number)` | Set the page size |
| `search(string)` | Full-text search |
| `filter(field, operator, value)` | Add a typed filter |
| `filterRaw(path, operator, value)` | Add a raw path filter |
| `sort(field, "asc" \| "desc")` | Set sort order |
| `build()` | Produce a `{ queryString, searchParams }` result |

Additional methods per builder:

- **`contentsQuery()`** — `.status("published" | "unpublished" | "all")`, `.locale("en-US")`, `.resolve("media", "relations")`
- **`mediaQuery()`** — `.folder("images")`, `.searchSubdirectory(true)`
- **`usersQuery()`** — `.email("...")`, `.firstName("...")`, `.isActive(true)`, `.roles([...])`

### Example: Fetch Published Contents

Fetch the first 20 published `pages` in English, filtered by creation date, sorted descending:

```typescript
import { createAtlasCmsClient, contentsQuery } from "atlascms-sdk-js";

const client = createAtlasCmsClient({
  projectId: "my-project-id",
  apiKey: "YOUR_BEARER_TOKEN"
});

const query = contentsQuery()
  .page(1)
  .size(20)
  .status("published")
  .locale("en-US")
  .filter("createdAt", "gte", "2026-01-01T00:00:00.000Z")
  .sort("createdAt", "desc")
  .build();

const result = await client.contents.list("pages", query);
```

## Error Handling

The SDK exposes three typed error classes:

```typescript
import { AtlasHttpError, AtlasNetworkError, AtlasTimeoutError } from "atlascms-sdk-js";

try {
  await client.contents.list("pages");
} catch (error) {
  if (error instanceof AtlasHttpError) {
    console.log(error.status, error.code, error.message);
  } else if (error instanceof AtlasTimeoutError) {
    console.log("Request timed out");
  } else if (error instanceof AtlasNetworkError) {
    console.log("Network error");
  }
}
```

| Class | Description |
|-------|-------------|
| `AtlasHttpError` | API responded with a non-2xx status — exposes `status`, `code`, `message`, `details`, `requestId` |
| `AtlasNetworkError` | Request could not reach the API (network failure, DNS, etc.) |
| `AtlasTimeoutError` | Request exceeded the configured `timeoutMs` |

## Per-Request API Key Override

You can override the API key on a per-request basis:

```typescript
await client.media.list(undefined, {
  apiKey: "ANOTHER_BEARER_TOKEN"
});
```

## Custom Base URL

Useful for local development or self-hosted instances:

```typescript
const client = createAtlasCmsClient({
  projectId: "my-project-id",
  apiKey: "YOUR_BEARER_TOKEN",
  baseUrl: "https://my-custom-instance.example.com"
});
```

## Custom Fetch

Useful for server-side environments or testing:

```typescript
const client = createAtlasCmsClient({
  projectId: "my-project-id",
  apiKey: "YOUR_BEARER_TOKEN",
  fetchFn: myCustomFetch
});
```
