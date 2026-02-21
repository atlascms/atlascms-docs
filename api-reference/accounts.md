---
title: Accounts
description: API Reference - Accounts
---

# Accounts

## Login Account

```
POST /login
```

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
curl -X POST "https://{project}.atlascms.io/login" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username":"string","password":"string"}'
```

---

## Register a new Account

```
POST /accounts/register
```

### Request Body

```json
{
  "firstName": "string",
  "lastName": "string",
  "company": "string",
  "jobType": "string",
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
curl -X POST "https://{project}.atlascms.io/accounts/register" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"firstName":"string","lastName":"string","company":"string","jobType":"string","username":"string","password":"string"}'
```

---

## Request a Password Reset

```
POST /accounts/password/forgot
```

### Request Body

```json
{
  "username": "string"
}
```

### cURL Example

```bash
curl -X POST "https://{project}.atlascms.io/accounts/password/forgot" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username":"string"}'
```

---

## Reset the Password

```
POST /accounts/password/reset
```

### Request Body

```json
{
  "token": "string",
  "password": "string"
}
```

### cURL Example

```bash
curl -X POST "https://{project}.atlascms.io/accounts/password/reset" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"token":"string","password":"string"}'
```

---

## Password Reset

```
POST /accounts/password
```

### Request Body

```json
{
  "token": "string",
  "password": "string"
}
```

### cURL Example

```bash
curl -X POST "https://{project}.atlascms.io/accounts/password" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"token":"string","password":"string"}'
```

---

## Get Authenticated Account

```
GET /accounts/me
```

### Response (200 OK)

```json
{
  "id": "string",
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "company": "string",
  "jobType": "string",
  "projects": [
    {
      "id": "string",
      "displayName": "string",
      "name": "string",
      "instance": "string",
      "owner": true,
      "role": "string",
      "permissions": []
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "https://{project}.atlascms.io/accounts/me" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

## Update the Authenticated Account

```
PUT /accounts/me
```

### Request Body

```json
{
  "firstName": "string",
  "lastName": "string",
  "company": "string",
  "jobType": "string"
}
```

### cURL Example

```bash
curl -X PUT "https://{project}.atlascms.io/accounts/me" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"firstName":"string","lastName":"string","company":"string","jobType":"string"}'
```

---

## Change the password of the Authenticated Account

```
POST /accounts/me/password
```

### Request Body

```json
{
  "password": "string"
}
```

### cURL Example

```bash
curl -X POST "https://{project}.atlascms.io/accounts/me/password" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"password":"string"}'
```

---

