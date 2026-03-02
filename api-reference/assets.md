---
title: Assets
description: API Reference - Assets
---

# Assets

## Get the original asset

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

---

## Get the original asset

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

---

## Get the original video

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

---

