---
title: Admin - API Keys
description: API Reference - Admin - API Keys
---

# Admin - API Keys

APIs for managing API keys. Create, update, and revoke keys used to authenticate API requests.

## Get Api Keys <span class="http-badge http-badge-get">GET</span>

Lists all API keys for the project. API keys are used to authenticate requests.

```
GET /{project}/admin/api-keys
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
[
  {
    "id": "string",
    "name": "string",
    "token": "string",
    "isActive": true,
    "validFrom": "2024-01-15T12:00:00Z",
    "validTo": "2024-01-15T12:00:00Z",
    "permissions": [
      "string"
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/admin/api-keys" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Create Api Key <span class="http-badge http-badge-post">POST</span>

Creates a new API key with configurable permissions and optional expiry.

```
POST /{project}/admin/api-keys
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "isActive": true,
  "validFrom": "2024-01-15T12:00:00Z",
  "validTo": "2024-01-15T12:00:00Z",
  "permissions": [
    "string"
  ]
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
curl -X POST "https://my-project.atlascms.io/{project}/admin/api-keys" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","isActive":true,"validFrom":"2024-01-15T12:00:00Z","validTo":"2024-01-15T12:00:00Z","permissions":["string"]}'
```

## Get Api Key <span class="http-badge http-badge-get">GET</span>

Retrieves a single API key by ID.

```
GET /{project}/admin/api-keys/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Response (200 OK)

```json
{
  "id": "string",
  "name": "string",
  "token": "string",
  "isActive": true,
  "validFrom": "2024-01-15T12:00:00Z",
  "validTo": "2024-01-15T12:00:00Z",
  "permissions": [
    "string"
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/admin/api-keys/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Update Api Key <span class="http-badge http-badge-put">PUT</span>

Updates an API key's permissions or expiry date.

```
PUT /{project}/admin/api-keys/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "isActive": true,
  "validFrom": "2024-01-15T12:00:00Z",
  "validTo": "2024-01-15T12:00:00Z",
  "permissions": [
    "string"
  ]
}
```

### cURL Example

```bash
curl -X PUT "https://my-project.atlascms.io/{project}/admin/api-keys/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","isActive":true,"validFrom":"2024-01-15T12:00:00Z","validTo":"2024-01-15T12:00:00Z","permissions":["string"]}'
```

## Delete Api Key <span class="http-badge http-badge-delete">DELETE</span>

Revokes and deletes an API key. Requests using this key will fail.

```
DELETE /{project}/admin/api-keys/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/admin/api-keys/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

