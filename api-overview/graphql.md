# GraphQL

In addition to the REST APIs, Atlas CMS exposes a **GraphQL endpoint** that lets you query data using the GraphQL query language. You can use GraphQL to read and, where supported, modify **contents**, **media**, and **users** with declarative, flexible requests.

## Availability

GraphQL in Atlas CMS is available for:

| Resource | Description |
|----------|-------------|
| **Contents** | All content defined by your project's models. You can query one or more models, filter, sort, and request only the fields you need. |
| **Media** | Media Library items (images, videos, documents). Query media and folders with filters and optional fields. |
| **Users** | Project users and members. Useful for profiles, roles, and user-related data. |

::: tip
Authentication for GraphQL is the same as for the REST APIs: use the **Authorization: Bearer &lt;token&gt;** header with an API Token created in [Project Settings](/admin-ui/settings#api-tokens). The token's permissions determine which GraphQL data you can read or modify.
:::

## Endpoint

The GraphQL endpoint uses the same **base URL** as your project, as shown in [General Settings](/admin-ui/settings#general).

- **URL:** `POST {baseUrl}/graphql`
- **Content-Type:** `application/json`

The request body is a JSON object with at least a `query` field (and optionally `variables` for variables):

```json
{
  "query": "query { ... }",
  "variables": {}
}
```

## Why use GraphQL

- **Only the fields you need:** Request exactly the fields you want, reducing payload size and response time.
- **One request, multiple resources:** In a single query you can combine contents, media, and users without multiple REST calls.
- **Typed schema:** The GraphQL schema describes types, fields, and relationships; you can use introspection to explore it and generate type-safe clients.
- **Same security model:** Same tokens and permissions as the REST APIs.

## Example queries

Example combining contents and media in a single request:

```graphql
query {
  contents(modelKey: "article", first: 10) {
    nodes {
      id
      attributes {
        title
        coverImage {
          id
          url
          width
          height
        }
      }
    }
  }
}
```

For **users**, you might have a query like:

```graphql
query {
  users(first: 20) {
    nodes {
      id
      username
      email
    }
  }
}
```

The exact structure (model names, fields, filters) depends on your project's schema. Use introspection or the built-in documentation to discover available types.

## Introspection and schema

GraphQL exposes your project's **schema** via introspection. You can:

- Explore available types, fields, and relationships.
- Use tools like GraphiQL or Apollo Studio to write and test queries.
- Generate TypeScript, C#, or other types from the schema.

Introspection requests follow the same authentication rules: the token must have the appropriate permissions to access the data you want to query.

## Limitations

Rate limits for GraphQL requests per second are defined by your plan (Free or Paid) and are listed in the [Technical Limitations](/api-overview/api-basics#technical-limitations) section of API Basics. They match the values shown for "GraphQL Requests" in the limits table.

::: info
For the detailed reference of GraphQL operations and types (queries, mutations, subscriptions if supported), see the API Reference or the schema exposed by your project's `/graphql` endpoint.
:::
