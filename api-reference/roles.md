---
title: Roles
description: API Reference - Roles
---

# Roles

## Get Account Roles

```
GET /{project}/memberhips/roles
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
    "system": true,
    "permissions": [
      "string"
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/memberhips/roles" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create Account Role

```
POST /{project}/memberhips/roles
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "permissions": [
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
curl -X POST "https://my-project.atlascms.io/{project}/memberhips/roles" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","permissions":["string"]}'
```

---

## Update Account Role

```
PUT /{project}/memberhips/roles/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |
| `id` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

### cURL Example

```bash
curl -X PUT "https://my-project.atlascms.io/{project}/memberhips/roles/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","permissions":["string"]}'
```

---

## Delete Account Role

```
DELETE /{project}/memberhips/roles/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/memberhips/roles/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Account Permission Set

```
GET /{project}/memberhips/roles/permissions
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
[
  {
    "group": "string",
    "type": "string",
    "key": "string",
    "sections": [
      {
        "name": "string",
        "feature": "string",
        "permissions": []
      }
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/memberhips/roles/permissions" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get User Roles

```
GET /{project}/users/roles
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
    "system": true,
    "permissions": [
      "string"
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/users/roles" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create User Role

```
POST /{project}/users/roles
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "permissions": [
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
curl -X POST "https://my-project.atlascms.io/{project}/users/roles" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","permissions":["string"]}'
```

---

## Update User Role

```
PUT /{project}/users/roles/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |
| `id` | string | Yes | - |

### Request Body

```json
{
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

### cURL Example

```bash
curl -X PUT "https://my-project.atlascms.io/{project}/users/roles/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"string","permissions":["string"]}'
```

---

## Delete User Role

```
DELETE /{project}/users/roles/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/users/roles/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## User Permission Set

```
GET /{project}/users/roles/permissions
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
[
  {
    "group": "string",
    "type": "string",
    "key": "string",
    "sections": [
      {
        "name": "string",
        "feature": "string",
        "permissions": []
      }
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/users/roles/permissions" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

