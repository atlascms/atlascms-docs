---
title: Reports
description: API Reference - Reports
---

# Reports

## Get Counters

```
GET /{project}/reports/counters
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
{
  "models": 0,
  "locales": 0,
  "users": 0,
  "images": 0,
  "videos": 0,
  "documents": 0,
  "contents": 0,
  "assetsSize": [
    {
      "key": "string",
      "value": 0
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/reports/counters" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Content Stats

```
GET /{project}/reports/contents
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
{
  "totals": [
    {
      "name": "string",
      "published": 0,
      "unpublished": 0
    }
  ],
  "locales": [
    {
      "name": "string",
      "published": 0,
      "unpublished": 0
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/reports/contents" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

