---
title: Users
description: API Reference - Users
---

# Users

## Login User

```
POST /{project}/users/login
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "username": "string",
  "password": "string"
}
```

### Response (200 OK)

```json
{
  "id": "string",
  "access_token": "string",
  "expires_at": 0,
  "type": "string",
  "refresh": "string",
  "auth_type": "user"
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/users/login" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username":"string","password":"string"}'
```

---

## Get Users

```
GET /{project}/users
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `username` | string | No | - |
| `search` | string | No | - |
| `roleId` | string | No | - |
| `resolve` | string | No | Accept: media, mediagallery, references |
| `page` | integer | No | - |
| `size` | integer | No | - |
| `sort` | string | No | - |

### Response (200 OK)

```json
{
  "data": [
    {
      "id": "string",
      "firstName": "string",
      "lastName": "string",
      "username": "string",
      "email": "string",
      "mobilePhone": "string",
      "roles": [],
      "isActive": true,
      "createdAt": "2024-01-15T12:00:00Z",
      "createdBy": "string",
      "modifiedAt": "2024-01-15T12:00:00Z",
      "modifiedBy": "string",
      "notes": "string",
      "attributes": {
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
curl -X GET "https://my-project.atlascms.io/{project}/users" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Count Users

```
GET /{project}/users/count
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `username` | string | No | - |
| `search` | string | No | - |
| `roleId` | string | No | - |

### Response (200 OK)

```json
{
  "result": 0
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/users/count" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Get User

```
GET /{project}/users/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `resolve` | string | No | Accept: media, mediagallery, references |

### Response (200 OK)

```json
{
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "email": "string",
  "mobilePhone": "string",
  "roles": [
    "string"
  ],
  "isActive": true,
  "createdAt": "2024-01-15T12:00:00Z",
  "createdBy": "string",
  "modifiedAt": "2024-01-15T12:00:00Z",
  "modifiedBy": "string",
  "notes": "string",
  "attributes": {
    "key": "value"
  }
}
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/users/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update User

```
PUT /{project}/users/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "email": "string",
  "mobilePhone": "string",
  "roles": [
    "string"
  ],
  "notes": "string",
  "attributes": {
    "key": "value"
  }
}
```

### cURL Example

```bash
curl -X PUT "https://my-project.atlascms.io/{project}/users/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"firstName":"string","lastName":"string","username":"string","email":"string","mobilePhone":"string","roles":["string"],"notes":"string","attributes":{"key":"value"}}'
```

---

## Delete User

```
DELETE /{project}/users/{id}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/users/item-id" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Create User

```
POST /{project}/users/register
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "firstName": "string",
  "lastName": "string",
  "username": "string",
  "email": "string",
  "mobilePhone": "string",
  "roles": [
    "string"
  ],
  "password": "string",
  "isActive": true,
  "attributes": {
    "key": "value"
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
curl -X POST "https://my-project.atlascms.io/{project}/users/register" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"firstName":"string","lastName":"string","username":"string","email":"string","mobilePhone":"string","roles":["string"],"password":"string","isActive":true,"attributes":{"key":"value"}}'
```

---

## Change the user status active/inactive

```
POST /{project}/users/{id}/status
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "isActive": true
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/users/item-id/status" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"isActive":true}'
```

---

## Change Password

```
POST /{project}/users/{id}/change-password
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "password": "string"
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/users/item-id/change-password" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"password":"string"}'
```

---

