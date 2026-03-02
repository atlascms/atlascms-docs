---
title: Roles
description: API Reference - Roles
---

# Roles

APIs for defining user roles and permissions. Control what each role can access in the project.

## Get User Roles <span class="http-badge http-badge-get">GET</span>

Lists all user roles defined in the project.

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

## Create User Role <span class="http-badge http-badge-post">POST</span>

Creates a new role with configurable permissions.

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

## Update User Role <span class="http-badge http-badge-put">PUT</span>

Updates an existing role's permissions.

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

## Delete User Role <span class="http-badge http-badge-delete">DELETE</span>

Deletes a role. Users with this role must be reassigned.

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

## User Permission Set <span class="http-badge http-badge-get">GET</span>

Returns the list of available permissions for assigning to roles.

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

