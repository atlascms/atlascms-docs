---
title: Projects
description: API Reference - Projects
---

# Projects

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
    "plan": {
      "id": "string",
      "name": "string",
      "description": "string",
      "features": [],
      "activationDate": "2024-01-15T12:00:00Z",
      "expirationDate": "2024-01-15T12:00:00Z",
      "nextBillingDate": "2024-01-15T12:00:00Z"
    },
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
  "displayName": "string",
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
  -d '{"displayName":"string","description":"string","defaultLocale":"string"}'
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
  "plan": {
    "id": "string",
    "name": "string",
    "description": "string",
    "features": [
      {
        "id": "string",
        "includedQuantity": 0,
        "unitType": "units",
        "allowOverage": true
      }
    ],
    "activationDate": "2024-01-15T12:00:00Z",
    "expirationDate": "2024-01-15T12:00:00Z",
    "nextBillingDate": "2024-01-15T12:00:00Z"
  },
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
  "plan": {
    "id": "string",
    "name": "string",
    "description": "string",
    "features": [
      {
        "id": "string",
        "includedQuantity": 0,
        "unitType": "units",
        "allowOverage": true
      }
    ],
    "activationDate": "2024-01-15T12:00:00Z",
    "expirationDate": "2024-01-15T12:00:00Z",
    "nextBillingDate": "2024-01-15T12:00:00Z"
  },
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

## Delete Project

```
DELETE /{project}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Project's Metrics

```
GET /{project}/metrics
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
curl -X GET "https://my-project.atlascms.io/{project}/metrics" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get Project Settings

```
GET /{project}/settings
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
{
  "users": {
    "enabled": true,
    "passwordComplexity": {
      "minLength": 0,
      "upperCase": 0,
      "lowerCase": 0,
      "digits": 0,
      "specialChars": 0
    }
  },
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
curl -X GET "https://my-project.atlascms.io/{project}/settings" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update Project Settings

```
PUT /{project}/settings
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "users": {
    "enabled": true,
    "passwordComplexity": {
      "minLength": 0,
      "upperCase": 0,
      "lowerCase": 0,
      "digits": 0,
      "specialChars": 0
    }
  },
  "locales": [
    {
      "locale": "string",
      "isDefault": true
    }
  ]
}
```

### Response (200 OK)

```json
{
  "users": {
    "enabled": true,
    "passwordComplexity": {
      "minLength": 0,
      "upperCase": 0,
      "lowerCase": 0,
      "digits": 0,
      "specialChars": 0
    }
  },
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
curl -X PUT "https://my-project.atlascms.io/{project}/settings" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"users":{"enabled":true,"passwordComplexity":{"minLength":0,"upperCase":0,"lowerCase":0,"digits":0,"specialChars":0}},"locales":[{"locale":"string","isDefault":true}]}'
```

---

