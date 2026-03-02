---
title: Assets
description: API Reference - Assets
---

# Assets

APIs for retrieving the actual asset files (images, documents, videos) by ID. Use these URLs to serve media in your frontend.

## Get the original asset <span class="http-badge http-badge-get">GET</span>

Returns the original asset file (image, document, or video) by ID and filename.

```
GET /assets/{project}/{id}/{name}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `name` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/assets/{project}/item-id/filename" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Get the original asset <span class="http-badge http-badge-get">GET</span>

Returns the original asset file (image, document, or video) by ID and filename.

```
GET /assets/{project}/docs/{id}/{name}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `name` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/assets/{project}/docs/item-id/filename" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Get the original video <span class="http-badge http-badge-get">GET</span>

Returns the original video file for streaming or download.

```
GET /assets/{project}/video/{id}/{name}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `name` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/assets/{project}/video/item-id/filename" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

