---
title: Admin - Project
description: API Reference - Admin - Project
---

# Admin - Project

APIs for project administration: settings, metrics, counters, and content statistics.

## Get Project's Metrics <span class="http-badge http-badge-get">GET</span>

Returns usage metrics for the project (API calls, storage, etc.).

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

## Get Counters <span class="http-badge http-badge-get">GET</span>

Returns counter statistics for the project.

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

## Get Content Stats <span class="http-badge http-badge-get">GET</span>

Returns content statistics per model (published/unpublished counts).

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

## Get Projects <span class="http-badge http-badge-get">GET</span>

Lists all projects accessible to the authenticated account.

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

## Create Project <span class="http-badge http-badge-post">POST</span>

Creates a new project. Each project is an independent content environment.

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

## Get Project <span class="http-badge http-badge-get">GET</span>

Retrieves project details and configuration.

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

## Update Project <span class="http-badge http-badge-put">PUT</span>

Updates project settings such as name and description.

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

