---
title: Admin - API Keys
description: API Reference - Admin - API Keys
---

# Admin - API Keys

## Get Api Keys

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

---

## Create Api Key

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

---

## Get Api Key

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

---

## Update Api Key

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

---

## Delete Api Key

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

---

