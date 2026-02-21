# .NET Core SDK

The Atlas CMS .NET Core SDK provides a native C# interface for integrating Atlas CMS into your .NET applications.

## Installation

Install the package via NuGet:

```bash
dotnet add package Atlascms.Sdk
```

Or with Package Manager:

```powershell
Install-Package Atlascms.Sdk
```

## Initialize the Client

To initialize the client you need an API Token and a Project ID. You can obtain these from the [Settings](/admin-ui/settings#api-tokens) page in the Admin UI.

```csharp
using Atlascms.Sdk;

var client = new AtlasClient(new AtlasClientOptions
{
    ApiToken = "your-api-token",
    ProjectId = "your-project-id"
});
```

## Use the Client

The client exposes services for each main entity:

| Service | Description |
|---------|-------------|
| `client.Contents` | For content CRUD operations |
| `client.Models` | For models and components |
| `client.MediaLibrary` | For assets and folders |
| `client.Users` | For project users and roles |

### Example: List Contents

```csharp
var posts = await client.Contents.ListAsync("posts");
```

### Example: Get Single Content

```csharp
var post = await client.Contents.GetAsync("posts", "content-id");
```

### Example: Create Content

```csharp
var newPost = await client.Contents.CreateAsync("posts", new
{
    locale = "en",
    attributes = new
    {
        title = "My Post Title",
        body = "Post content here"
    }
});
```

## Filtering and Pagination

The SDK supports fluent query building for filtering and pagination:

```csharp
var posts = await client.Contents
    .List("posts")
    .Filter("category", "eq", "sport")
    .Filter("date", "gte", "2023-01-01")
    .Sort("date", "desc")
    .Page(1)
    .Size(10)
    .ExecuteAsync();
```
