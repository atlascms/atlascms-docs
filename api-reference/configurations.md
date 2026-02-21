---
title: Configurations
description: API Reference - Configurations
---

# Configurations

## Get Environment Configuration

```
GET /configs/frontend
```

### Response (200 OK)

```json
{
  "selfRegistration": true,
  "allowedDomains": [
    "string"
  ],
  "allowPasswordAuth": true,
  "allowGoogleAuth": true,
  "allowGithubAuth": true,
  "passwordRules": {
    "minLength": 0,
    "upperCase": 0,
    "lowerCase": 0,
    "digits": 0,
    "specialChars": 0
  }
}
```

### cURL Example

```bash
curl -X GET "https://{project}.atlascms.io/configs/frontend" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

---

