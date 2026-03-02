---
title: Contents
description: API Reference - Contents
---

# Contents

APIs for managing content entries. Create, read, update, and delete content; publish/unpublish; duplicate; and manage localized versions.

## Get Contents <span class="http-badge http-badge-get">GET</span>

Retrieves a paginated list of content entries for the specified model. Supports filtering, sorting, and locale selection.

```
GET /{project}/contents/{type}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `filter` | string | No | Querystring parameters in the form of <b>?filter[field][operator]=values&filter[field][operator]=values</b> |
| `search` | string | No | - |
| `locale` | string | No | - |
| `resolve` | string | No | Accept: media, mediagallery, references |
| `status` | string | No | - |
| `page` | integer | No | - |
| `size` | integer | No | - |
| `sort` | string | No | - |

### Response (200 OK)

```json
{
  "data": [
    {
      "id": "string",
      "modelKey": "string",
      "locale": "string",
      "createdAt": "2024-01-15T12:00:00Z",
      "createdBy": "string",
      "modifiedAt": "2024-01-15T12:00:00Z",
      "modifiedBy": "string",
      "hash": "string",
      "status": "unpublished",
      "attributes": {
        "key": "value"
      },
      "locales": []
    }
  ],
  "metadata": {
    "currentPage": 0,
    "pageSize": 0,
    "hasPreviousPage": true,
    "hasNextPage": true,
    "totalPages": 0,
    "count": 0
  }
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Create Content <span class="http-badge http-badge-post">POST</span>

Creates a new content entry in the specified model. Requires locale and attributes matching the model schema.

```
POST /{project}/contents/{type}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "locale": "string",
  "attributes": {
    "key": "value"
  }
}
```

### Response (200 OK)

```json
{
  "result": "string"
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/contents/posts" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"locale":"string","attributes":{"key":"value"}}'
```

## Get Single Content <span class="http-badge http-badge-get">GET</span>

Retrieves the single content entry for models configured with "single collection" (e.g. settings, config).

```
GET /{project}/contents/{type}/single
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `locale` | string | No | - |
| `resolve` | string | No | Accept: media, mediagallery, references |
| `status` | string | No | - |
| `page` | integer | No | - |
| `size` | integer | No | - |
| `sort` | string | No | - |

### Response (200 OK)

```json
{
  "id": "string",
  "modelKey": "string",
  "locale": "string",
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "hash": "string",
  "status": "unpublished",
  "attributes": {
    "key": "value"
  },
  "locales": [
    {
      "locale": "string",
      "id": "string"
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts/single" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Count Contents <span class="http-badge http-badge-get">GET</span>

Returns the total count of content entries matching the filter criteria, useful for pagination.

```
GET /{project}/contents/{type}/count
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `filter` | string | No | Querystring parameters in the form of <b>?filter[field][operator]=values&filter[field][operator]=values</b> |
| `search` | string | No | - |
| `locale` | string | No | - |
| `status` | string | No | - |

### Response (200 OK)

```json
{
  "result": 0
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts/count" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Get Content <span class="http-badge http-badge-get">GET</span>

Retrieves a single content entry by ID. Supports resolving media and relations to full objects.

```
GET /{project}/contents/{type}/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `type` | string | Yes | - |
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `resolve` | string | No | Accept: media, mediagallery, references |

### Response (200 OK)

```json
{
  "id": "string",
  "modelKey": "string",
  "locale": "string",
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "hash": "string",
  "status": "unpublished",
  "attributes": {
    "key": "value"
  },
  "locales": [
    {
      "locale": "string",
      "id": "string"
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Update Content <span class="http-badge http-badge-put">PUT</span>

Updates an existing content entry. Acts as a patch for attributes—only provided fields are updated.

```
PUT /{project}/contents/{type}/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "attributes": {
    "key": "value"
  }
}
```

### cURL Example

```bash
curl -X PUT "https://my-project.atlascms.io/{project}/contents/posts/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"attributes":{"key":"value"}}'
```

## Delete Content <span class="http-badge http-badge-delete">DELETE</span>

Permanently deletes a content entry by ID.

```
DELETE /{project}/contents/{type}/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `locales` | boolean | No | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/contents/posts/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Change the status of a content <span class="http-badge http-badge-post">POST</span>

Publishes or unpublishes a content entry. Available when the model has stage mode enabled.

```
POST /{project}/contents/{type}/{id}/status
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "status": "unpublished"
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/contents/posts/item-id/status" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"status":"unpublished"}'
```

## Create Localized version of content <span class="http-badge http-badge-post">POST</span>

Creates a new localized version of a content entry for a specified locale.

```
POST /{project}/contents/{type}/{id}/create-translation
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "locale": "string"
}
```

### Response (200 OK)

```json
{
  "result": "string"
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/contents/posts/item-id/create-translation" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"locale":"string"}'
```

## Duplicate Content <span class="http-badge http-badge-post">POST</span>

Creates a copy of an existing content entry, optionally including all localized versions.

```
POST /{project}/contents/{type}/{id}/duplicate
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "locales": true
}
```

### Response (200 OK)

```json
{
  "key": "value"
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/contents/posts/item-id/duplicate" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"locales":true}'
```

## Delete All Contents <span class="http-badge http-badge-delete">DELETE</span>

Deletes all content entries in the specified model. Use with caution.

```
DELETE /{project}/contents/{type}/clear
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/contents/posts/clear" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

