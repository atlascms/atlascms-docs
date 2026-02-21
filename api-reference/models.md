---
title: Models
description: API Reference - Models
---

# Models

## List Models

```
GET /{project}/content-types/models
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `system` | boolean | No | - |

### Response (200 OK)

```json
[
  {
    "id": "string",
    "name": "string",
    "key": "string",
    "description": "string",
    "type": "model",
    "attributes": [
      {
        "key": "string",
        "label": "string",
        "name": "string",
        "hint": "string",
        "order": 0,
        "type": "string",
        "localizable": true,
        "hidden": true,
        "readOnly": true,
        "required": true
      }
    ],
    "createdAt": "2024-01-15T12:00:00Z",
    "createdBy": "string",
    "modifiedAt": "2024-01-15T12:00:00Z",
    "modifiedBy": "string",
    "enableStageMode": true,
    "isSingle": true,
    "system": true,
    "localizable": true,
    "properties": {
      "icon": "string",
      "fieldsets": [],
      "links": []
    },
    "filters": [
      {
        "name": "string",
        "operators": [],
        "key": "string",
        "fieldType": "boolean"
      }
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/content-types/models?system=value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Model

```
POST /{project}/content-types/models
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "key": "string",
  "name": "string",
  "description": "string",
  "isSingle": true,
  "localizable": true,
  "enableStageMode": true,
  "attributes": [
    {
      "key": "string",
      "label": "string",
      "name": "string",
      "hint": "string",
      "order": 0,
      "type": "string",
      "localizable": true,
      "hidden": true,
      "readOnly": true,
      "required": true
    }
  ],
  "properties": {
    "icon": "string",
    "fieldsets": [
      {
        "key": "string",
        "name": "string",
        "description": "string",
        "collapsed": true,
        "fields": []
      }
    ],
    "links": [
      {
        "key": "string",
        "value": "string"
      }
    ]
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
curl -X POST "https://my-project.atlascms.io/{project}/content-types/models" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"key":"string","name":"string","description":"string","isSingle":true,"localizable":true,"enableStageMode":true,"attributes":[{"key":"string","label":"string","name":"string","hint":"string","order":0,"type":"string","localizable":true,"hidden":true,"readOnly":true,"required":true}],"properties":{"icon":"string","fieldsets":[{"key":"string","name":"string","description":"string","collapsed":true,"fields":[]}],"links":[{"key":"string","value":"string"}]}}'
```

---

## Get Model

```
GET /{project}/content-types/models/{id}
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
  "key": "string",
  "description": "string",
  "type": "model",
  "attributes": [
    {
      "key": "string",
      "label": "string",
      "name": "string",
      "hint": "string",
      "order": 0,
      "type": "string",
      "localizable": true,
      "hidden": true,
      "readOnly": true,
      "required": true
    }
  ],
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "enableStageMode": true,
  "isSingle": true,
  "system": true,
  "localizable": true,
  "properties": {
    "icon": "string",
    "fieldsets": [
      {
        "key": "string",
        "name": "string",
        "description": "string",
        "collapsed": true,
        "fields": []
      }
    ],
    "links": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "filters": [
    {
      "name": "string",
      "operators": [],
      "key": "string",
      "fieldType": "boolean"
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/content-types/models/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update Model

```
PUT /{project}/content-types/models/{id}
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
  "description": "string",
  "isSingle": true,
  "localizable": true,
  "enableStageMode": true,
  "attributes": [
    {
      "key": "string",
      "label": "string",
      "name": "string",
      "hint": "string",
      "order": 0,
      "type": "string",
      "localizable": true,
      "hidden": true,
      "readOnly": true,
      "required": true
    }
  ],
  "properties": {
    "icon": "string",
    "fieldsets": [
      {
        "key": "string",
        "name": "string",
        "description": "string",
        "collapsed": true,
        "fields": []
      }
    ],
    "links": [
      {
        "key": "string",
        "value": "string"
      }
    ]
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
curl -X PUT "https://my-project.atlascms.io/{project}/content-types/models/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","description":"string","isSingle":true,"localizable":true,"enableStageMode":true,"attributes":[{"key":"string","label":"string","name":"string","hint":"string","order":0,"type":"string","localizable":true,"hidden":true,"readOnly":true,"required":true}],"properties":{"icon":"string","fieldsets":[{"key":"string","name":"string","description":"string","collapsed":true,"fields":[]}],"links":[{"key":"string","value":"string"}]}}'
```

---

## Delete Model

```
DELETE /{project}/content-types/models/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/content-types/models/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## List Components

```
GET /{project}/content-types/components
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
    "key": "string",
    "description": "string",
    "type": "model",
    "attributes": [
      {
        "key": "string",
        "label": "string",
        "name": "string",
        "hint": "string",
        "order": 0,
        "type": "string",
        "localizable": true,
        "hidden": true,
        "readOnly": true,
        "required": true
      }
    ],
    "createdAt": "2024-01-15T12:00:00Z",
    "createdBy": "string",
    "modifiedAt": "2024-01-15T12:00:00Z",
    "modifiedBy": "string"
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/content-types/components" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Component

```
POST /{project}/content-types/components
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "key": "string",
  "name": "string",
  "description": "string",
  "attributes": [
    {
      "key": "string",
      "label": "string",
      "name": "string",
      "hint": "string",
      "order": 0,
      "type": "string",
      "localizable": true,
      "hidden": true,
      "readOnly": true,
      "required": true
    }
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
curl -X POST "https://my-project.atlascms.io/{project}/content-types/components" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"key":"string","name":"string","description":"string","attributes":[{"key":"string","label":"string","name":"string","hint":"string","order":0,"type":"string","localizable":true,"hidden":true,"readOnly":true,"required":true}]}'
```

---

## Get Component

```
GET /{project}/content-types/components/{id}
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
  "key": "string",
  "description": "string",
  "type": "model",
  "attributes": [
    {
      "key": "string",
      "label": "string",
      "name": "string",
      "hint": "string",
      "order": 0,
      "type": "string",
      "localizable": true,
      "hidden": true,
      "readOnly": true,
      "required": true
    }
  ],
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string"
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/content-types/components/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update Component

```
PUT /{project}/content-types/components/{id}
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
  "description": "string",
  "attributes": [
    {
      "key": "string",
      "label": "string",
      "name": "string",
      "hint": "string",
      "order": 0,
      "type": "string",
      "localizable": true,
      "hidden": true,
      "readOnly": true,
      "required": true
    }
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
curl -X PUT "https://my-project.atlascms.io/{project}/content-types/components/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","description":"string","attributes":[{"key":"string","label":"string","name":"string","hint":"string","order":0,"type":"string","localizable":true,"hidden":true,"readOnly":true,"required":true}]}'
```

---

## Delete Component

```
DELETE /{project}/content-types/components/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/content-types/components/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

