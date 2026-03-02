---
title: Admin - Project
description: API Reference - Admin - Project
---

# Admin - Project

## Get Project's Metrics

```
GET /{project}/admin/metrics
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
{
  "metrics": {
    "key": "value"
  }
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/admin/metrics" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Counters

```
GET /{project}/admin/reports/counters
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
curl -X GET "https://my-project.atlascms.io/{project}/admin/reports/counters" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Content Stats

```
GET /{project}/admin/reports/contents
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
curl -X GET "https://my-project.atlascms.io/{project}/admin/reports/contents" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Projects

```
GET /projects
```

### Response (200 OK)

```json
[
  {
    "id": "string",
    "displayName": "string",
    "instance": "string",
    "name": "string",
    "description": "string",
    "createdAt": "2024-01-15T12:00:00Z",
    "createdBy": "string",
    "modifiedAt": "2024-01-15T12:00:00Z",
    "modifiedBy": "string",
    "locales": [
      {
        "locale": "string",
        "isDefault": true
      }
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://{project}.atlascms.io/projects" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Project

```
POST /projects
```

### Request Body

```json
{
  "name": "string",
  "description": "string",
  "defaultLocale": "string"
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
curl -X POST "https://{project}.atlascms.io/projects" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","description":"string","defaultLocale":"string"}'
```

---

## Get Project

```
GET /{project}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
{
  "id": "string",
  "displayName": "string",
  "instance": "string",
  "name": "string",
  "description": "string",
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "locales": [
    {
      "locale": "string",
      "isDefault": true
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update Project

```
PUT /{project}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "description": "string"
}
```

### Response (200 OK)

```json
{
  "id": "string",
  "displayName": "string",
  "instance": "string",
  "name": "string",
  "description": "string",
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "locales": [
    {
      "locale": "string",
      "isDefault": true
    }
  ]
}
```

### cURL Example

```bash
curl -X PUT "https://my-project.atlascms.io/{project}" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","description":"string"}'
```

---

