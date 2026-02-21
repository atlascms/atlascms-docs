---
title: Project Memberships
description: API Reference - Project Memberships
---

# Project Memberships

## Get memberships

```
GET /{project}/memberships
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
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "company": "string",
    "jobType": "string",
    "status": "active",
    "role": "string"
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/memberships" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Add a membership

```
POST /{project}/memberships
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "accountId": "string",
  "role": "string",
  "isActive": true
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
curl -X POST "https://my-project.atlascms.io/{project}/memberships" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"accountId":"string","role":"string","isActive":true}'
```

---

## Remove a membership

```
DELETE /{project}/memberships/{accountId}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accountId` | string | Yes | - |
| `project` | string | Yes | - |

### Response (200 OK)

```json
{
  "result": "string"
}
```

### cURL Example

```bash
curl -X DELETE "https://my-project.atlascms.io/{project}/memberships/value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update a membership

```
PUT /{project}/memberships/{accountId}
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `accountId` | string | Yes | - |
| `project` | string | Yes | - |

### Request Body

```json
{
  "role": "string",
  "isActive": true
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
curl -X PUT "https://my-project.atlascms.io/{project}/memberships/value" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"role":"string","isActive":true}'
```

---

## Invite members to join the project

```
POST /{project}/memberships/invitation
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "teamMembers": [
    {
      "email": "string",
      "role": "string"
    }
  ]
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/memberships/invitation" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"teamMembers":[{"email":"string","role":"string"}]}'
```

---

## Get membership settings

```
GET /{project}/memberships/me/settings
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Response (200 OK)

```json
[
  {
    "title": "string",
    "url": "string",
    "openInNewTab": true,
    "icon": "string",
    "referenceId": "string",
    "type": "model",
    "children": [
      {
        "title": "string",
        "url": "string",
        "openInNewTab": true,
        "icon": "string",
        "referenceId": "string",
        "type": "model",
        "children": []
      }
    ]
  }
]
```

### cURL Example

```bash
curl -X GET "https://my-project.atlascms.io/{project}/memberships/me/settings" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Set membership settings

```
POST /{project}/memberships/me/settings
```

### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `project` | string | Yes | - |

### Request Body

```json
{
  "items": [
    {
      "title": "string",
      "url": "string",
      "openInNewTab": true,
      "icon": "string",
      "referenceId": "string",
      "type": "model",
      "children": []
    }
  ]
}
```

### cURL Example

```bash
curl -X POST "https://my-project.atlascms.io/{project}/memberships/me/settings" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"items":[{"title":"string","url":"string","openInNewTab":true,"icon":"string","referenceId":"string","type":"model","children":[]}]}'
```

---

