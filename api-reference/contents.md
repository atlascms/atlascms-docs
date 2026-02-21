---
title: Contents
description: API Reference - Contents
---

# Contents

## Get Contents

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
| `stage` | string | No | - |
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
      "stage": "unpublished",
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
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts?filter=value&search=value&locale=value&resolve=value&stage=value&page=value&size=value&sort=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Content

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

---

## Get Single Content

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
| `stage` | string | No | - |
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
  "stage": "unpublished",
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
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts/single?locale=value&resolve=value&stage=value&page=value&size=value&sort=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Count Contents

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
| `stage` | string | No | - |

### Response (200 OK)

```json
{
  "result": 0
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts/count?filter=value&search=value&locale=value&stage=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Content

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
  "stage": "unpublished",
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
curl -X GET "https://my-project.atlascms.io/{project}/contents/posts/item-id?resolve=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update Content

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

---

## Delete Content

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
curl -X DELETE "https://my-project.atlascms.io/{project}/contents/posts/item-id?locales=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Publish Content

```
POST /{project}/contents/{type}/{id}/publish
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/contents/posts/item-id/publish" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Unpublish Content

```
POST /{project}/contents/{type}/{id}/unpublish
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `type` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/contents/posts/item-id/unpublish" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Localized version of content

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

---

## Duplicate Content

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

---

## Delete All Contents

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

---

