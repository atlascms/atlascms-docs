---
title: Audits
description: API Reference - Audits
---

# Audits

## Get Audits

```
GET /audits
```

### Path Parameters

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `entityId` | string | Yes | - |
| `entityType` | string | Yes | - |
| `page` | integer | No | - |
| `size` | integer | No | - |
| `sort` | string | No | - |

### Response (200 OK)

```json
{
  "data": [
    {
      "id": "string",
      "projectId": "string",
      "timestamp": "2024-01-15T12:00:00Z",
      "createdBy": "string",
      "type": "information",
      "entityId": "string",
      "entityType": "string",
      "event": "string",
      "message": "string",
      "result": "string",
      "data": {
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
curl -X GET "https://{project}.atlascms.io/audits?entityId=value&entityType=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Audits

```
GET /{project}/audits
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `entityId` | string | Yes | - |
| `entityType` | string | Yes | - |
| `page` | integer | No | - |
| `size` | integer | No | - |
| `sort` | string | No | - |

### Response (200 OK)

```json
{
  "data": [
    {
      "id": "string",
      "projectId": "string",
      "timestamp": "2024-01-15T12:00:00Z",
      "createdBy": "string",
      "type": "information",
      "entityId": "string",
      "entityType": "string",
      "event": "string",
      "message": "string",
      "result": "string",
      "data": {
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
curl -X GET "https://my-project.atlascms.io/{project}/audits?entityId=value&entityType=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

