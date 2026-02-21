---
title: Webhooks
description: API Reference - Webhooks
---

# Webhooks

## Get Webhooks

```
GET /{project}/webhooks
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
    "url": "string",
    "enabled": true,
    "includePayload": true,
    "createdAt": "2024-01-15T12:00:00Z",
    "createdBy": "string",
    "modifiedAt": "2024-01-15T12:00:00Z",
    "modifiedBy": "string",
    "headers": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "entityType": "string",
    "events": [
      "string"
    ],
    "entityTypeIds": [
      "string"
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/webhooks" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Webhook

```
POST /{project}/webhooks
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "url": "string",
  "enabled": true,
  "includePayload": true,
  "headers": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "entityType": "string",
  "events": [
    "string"
  ],
  "entityTypeIds": [
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
curl -X POST "https://my-project.atlascms.io/{project}/webhooks" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","url":"string","enabled":true,"includePayload":true,"headers":[{"key":"string","value":"string"}],"entityType":"string","events":["string"],"entityTypeIds":["string"]}'
```

---

## Get Webhook

```
GET /{project}/webhooks/{id}
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
  "url": "string",
  "enabled": true,
  "includePayload": true,
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "headers": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "entityType": "string",
  "events": [
    "string"
  ],
  "entityTypeIds": [
    "string"
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/webhooks/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update Webhook

```
PUT /{project}/webhooks/{id}
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
  "url": "string",
  "enabled": true,
  "includePayload": true,
  "headers": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "entityType": "string",
  "events": [
    "string"
  ],
  "entityTypeIds": [
    "string"
  ]
}
```

### Response (200 OK)

```json
{
  "id": "string",
  "name": "string",
  "url": "string",
  "enabled": true,
  "includePayload": true,
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "headers": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "entityType": "string",
  "events": [
    "string"
  ],
  "entityTypeIds": [
    "string"
  ]
}
```

### cURL Example

```bash
curl -X PUT "https://my-project.atlascms.io/{project}/webhooks/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","url":"string","enabled":true,"includePayload":true,"headers":[{"key":"string","value":"string"}],"entityType":"string","events":["string"],"entityTypeIds":["string"]}'
```

---

## Delete Webhook

```
DELETE /{project}/webhooks/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/webhooks/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

