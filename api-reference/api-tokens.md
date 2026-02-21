---
title: API Tokens
description: API Reference - API Tokens
---

# API Tokens

## Get Api Tokens

```
GET /{project}/api-tokens
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
curl -X GET "https://my-project.atlascms.io/{project}/api-tokens" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Api Token

```
POST /{project}/api-tokens
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
curl -X POST "https://my-project.atlascms.io/{project}/api-tokens" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","isActive":true,"validFrom":"2024-01-15T12:00:00Z","validTo":"2024-01-15T12:00:00Z","permissions":["string"]}'
```

---

## Get Api Token

```
GET /{project}/api-tokens/{id}
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
curl -X GET "https://my-project.atlascms.io/{project}/api-tokens/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update Api Token

```
PUT /{project}/api-tokens/{id}
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
curl -X PUT "https://my-project.atlascms.io/{project}/api-tokens/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","isActive":true,"validFrom":"2024-01-15T12:00:00Z","validTo":"2024-01-15T12:00:00Z","permissions":["string"]}'
```

---

## Delete Api Token

```
DELETE /{project}/api-tokens/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/api-tokens/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

