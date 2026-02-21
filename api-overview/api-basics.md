# API Basics

Our API is the key to seamlessly integrating Atlas CMS into your existing or new projects, creating custom solutions, and harnessing the full scope of our features to enhance your business operations. Whether you're a developer, a system administrator, or anyone else looking to interact with our platform programmatically, you're in the right place.

In this comprehensive API Reference, you'll find detailed information about all the endpoints, methods, and parameters at your disposal.

## What You'll Find Here

- **Endpoints and Methods:** A complete list of available API endpoints, along with the HTTP methods supported by each.
- **Request and Response Formats:** Detailed descriptions of request payloads and response structures, including example data.
- **Authentication:** Guidance on how to securely authenticate your requests for data and actions.
- **Technical Limits:** Information on technical limits to ensure fair and efficient API usage.
- **Errors:** Description of possible HTTP Status error codes you can receive.

::: tip
Atlas CMS is an API-first platform, and consequently the interaction with its API allows you to work with almost all of its features.
:::

::: tip
All APIs are based on the REST and JSON standard, and there is also a GraphQL layer that allows you to use its query language to retrieve content.
:::

::: tip
The base URL to access the APIs is provided in the General Settings page of the project. Check it out [here](/admin-ui/settings#general).
:::

## Authentication & Authorization

Any client interacting with the APIs needs to provide an access token that has the right privileges to access the resource you're requesting.

For example, if you create an access token that only has access to the Product contents for read, you will not be able to use this token to create it.

To supply an access token you must use the **Authorization Header** of the request.

What the client can request with the Access Token depends on the permissions assigned to it.

### Bearer Token

Include the token in the Authorization header:

```
Authorization: Bearer <your-access-token>
```

### Get the Token

You can create access tokens in the API Tokens tab under Settings menu.

Click [here](/admin-ui/settings#api-tokens) for more information about the API Tokens.

::: tip
Permissions for the API Tokens can be the same as the permissions assigned to a Member in the project.
:::

::: tip
The only exception is if you need to make requests to the features available at the Tenant/Profile level (create projects, edit profile info etc.). In this case you can authenticate an Account and use its access_token.
:::

### Authenticate an Account

If you wish to use the permissions of an Account you need to authenticate it with its credentials to get an access token you can use for the requests.

To authenticate a user you need to use the `login` endpoint.

## HTTP Errors

The Atlas APIs can generate errors that return to the client as HTTP Status. They are generated in the following cases:

| Status | Error |
|--------|-------|
| 400 | A malformed request. e.g. Filtering for a Field not available or not filterable |
| 401 | Missing token or Authentication failed |
| 403 | Forbidden. e.g. Token is authenticated, but without the required privileges for the type of request |
| 404 | Resource not found |
| 422 | Validation errors. e.g. Post a content with missing required fields or plan limit reached |
| 429 | Too many requests |
| 500 | Server Error |

Errors are returned in JSON format. The `message` field is the human readable error type.

There are special cases where the base error JSON is extended with other properties to better clarify the error. This is the case of **HTTP 422**. In this situation the JSON will contain a `failures` field with an Array of the validation errors.

## Technical Limitations

Before you embark on your journey with our API for Atlas CMS, it's essential to be aware of the technical limitations that may influence your development process.

### Free Plans

| Metric | Limit | Detail |
|--------|-------|--------|
| Projects | 3 | Max number of projects under the free plan |
| Content Entries | 500 | The total number of contents, images, video and files |
| REST Requests | 5 | Request per second, per project |
| GraphQL Requests | 5 | Request per second, per project |
| Models | unlimited | Number of models per each project |
| Models Fields | 100 | Max number of fields in each model |
| Storage Size | 500Mb | Max storage size per project |
| Image Size | 2Mb | Max size in MB per each image uploaded |
| File Size | 5Mb | Max size in MB per each file uploaded |
| Video Size | 50Mb | Max size in MB per each video file uploaded |

::: warning
To avoid waste of resources and allow best performance, Projects under the Free Plans that have not been accessed via the API or through the use of the Admin Dashboard for more than 60 consecutive days will be deleted.
:::

### Paid Plan

| Metric | Limit | Detail |
|--------|-------|--------|
| Projects | based on plan | - |
| Content Entries | based on plan | The total number of contents, images, video and files |
| REST Requests | 10 | Request per second, per project |
| GraphQL Requests | 10 | Request per second, per project |
| Models | unlimited | Number of models per each project |
| Models Fields | 100 | Max number of fields in each model |
| Storage Size | based on plan | Max storage size per project |
| Image Size | based on plan | Max size per each image uploaded |
| File Size | based on plan | Max size per each file uploaded |
| Video Size | based on plan | Max size per each video uploaded |

::: tip
If you require higher limits, contact us to talk about the Enterprise Plan capabilities. The Enterprise Plans come with a dedicated infrastructure with the option to customize the limits for your organization.
:::
