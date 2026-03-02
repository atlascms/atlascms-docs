---
title: Media Library
description: API Reference - Media Library
---

# Media Library

## Get Folders

```
GET /{project}/media-library/folders
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `search` | string | No | - |
| `searchSubdirectory` | boolean | No | - |
| `folder` | string | No | - |
| `page` | integer | No | - |
| `size` | integer | No | - |
| `sort` | string | No | - |

### Response (200 OK)

```json
{
  "id": "string",
  "text": "string",
  "path": "string",
  "children": [
    {
      "id": "string",
      "text": "string",
      "path": "string",
      "children": []
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/media-library/folders" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Folder

```
POST /{project}/media-library/folders
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "folder": "string"
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
curl -X POST "https://my-project.atlascms.io/{project}/media-library/folders" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"folder":"string"}'
```

---

## Delete Folder

```
DELETE /{project}/media-library/folders
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `folder` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/media-library/folders?folder=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Rename Folder

```
POST /{project}/media-library/folders/rename
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "folder": "string",
  "newName": "string"
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
curl -X POST "https://my-project.atlascms.io/{project}/media-library/folders/rename" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"folder":"string","newName":"string"}'
```

---

## Move Folder

```
POST /{project}/media-library/folders/move
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "folder": "string",
  "moveTo": "string"
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
curl -X POST "https://my-project.atlascms.io/{project}/media-library/folders/move" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"folder":"string","moveTo":"string"}'
```

---

## Get Medias

```
GET /{project}/media-library/media
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `folder` | string | No | - |
| `filter` | string | No | Querystring parameters in the form of <b>?filter[field][operator]=values&filter[field][operator]=values</b> |
| `search` | string | No | - |
| `searchSubdirectory` | boolean | No | - |
| `page` | integer | No | - |
| `size` | integer | No | - |
| `sort` | string | No | - |

### Response (200 OK)

```json
{
  "data": [
    {
      "id": "string",
      "code": "string",
      "folder": "string",
      "type": "string",
      "createdAt": "2024-01-15T12:00:00Z",
      "createdBy": "string",
      "modifiedAt": "2024-01-15T12:00:00Z",
      "modifiedBy": "string",
      "author": "string",
      "copyright": "string",
      "originalFileName": "string",
      "name": "string",
      "format": "string",
      "hash": "string",
      "mimeType": "string",
      "size": 0,
      "automaticTags": [],
      "tags": [],
      "url": "string",
      "provider": "string",
      "height": 0,
      "width": 0,
      "horizontalResolution": 0,
      "verticalResolution": 0,
      "duration": 0,
      "fps": 0,
      "codec": "string",
      "exif": {
        "key": "value"
      }
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
curl -X GET "https://my-project.atlascms.io/{project}/media-library/media" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Media

```
GET /{project}/media-library/media/{id}
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
  "code": "string",
  "folder": "string",
  "type": "string",
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "author": "string",
  "copyright": "string",
  "originalFileName": "string",
  "name": "string",
  "format": "string",
  "hash": "string",
  "mimeType": "string",
  "size": 0,
  "automaticTags": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "url": "string",
  "provider": "string",
  "height": 0,
  "width": 0,
  "horizontalResolution": 0,
  "verticalResolution": 0,
  "duration": 0,
  "fps": 0,
  "codec": "string",
  "exif": {
    "key": "value"
  }
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/media-library/media/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Delete Media

```
DELETE /{project}/media-library/media/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/media-library/media/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Set Media Tags

```
POST /{project}/media-library/media/{id}/tags
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "tags": [
    "string"
  ]
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/media-library/media/item-id/tags" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"tags":["string"]}'
```

---

## Upload File (form-data)

```
POST /{project}/media-library/media/upload
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

JSON object. See schema in OpenAPI spec for details.

### Response (200 OK)

```json
{
  "result": "string"
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/media-library/media/upload" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{}'
```

---

## Move Media

```
POST /{project}/media-library/media/move
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "mediaId": "string",
  "moveTo": "string"
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
curl -X POST "https://my-project.atlascms.io/{project}/media-library/media/move" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"mediaId":"string","moveTo":"string"}'
```

---

