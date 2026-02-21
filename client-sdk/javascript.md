# JavaScript SDK

In this section, we will take you on a journey through the powerful features and functionalities of our JavaScript SDK, designed to empower you in creating seamless and innovative digital projects that connect to Atlas CMS.

## Source Code

[GitHub - atlascms/atlascms-js](https://github.com/atlascms/atlascms-js)

## Installation

Install the package from the npm registry:

```bash
npm install @atlascms/sdk
```

Or with yarn:

```bash
yarn add @atlascms/sdk
```

## Initialize the Client

To initialize the client you need an API Token and a Project ID you want to connect.

To get these credentials, please check the documentation [here](/admin-ui/settings#api-tokens) and [here](/admin-ui/settings#general).

```javascript
import { AtlasClient } from '@atlascms/sdk';

const client = new AtlasClient({
  apiToken: 'your-api-token',
  projectId: 'your-project-id'
});
```

## Use the Client

The client exposes all methods covered in the API Reference section. They are available in each service inside the client:

| Service | Description |
|---------|-------------|
| `client.contents` | For contents |
| `client.models` | For models and components |
| `client.mediaLibrary` | For assets and folders |
| `client.users` | For project's users and roles |

### Example: Fetch Contents

```javascript
// Fetch contents from the posts collection
const posts = await client.contents.list('posts');
```

### Example: Fetch Media

```javascript
// Fetch a media object by ID
const media = await client.mediaLibrary.getMedia('media-id');
```

## Query Builder

To simplify the creation of query parameters for filtering Contents, the SDK implements a fluent query builder that you can use to avoid string concatenation or complex logic in your code.

### Example

Fetch the last 10 `posts` where the `category` field equals `'sport'` and the post `date` is greater or equal to `'2023-01-01'`, ordered descending by the date field:

```javascript
const posts = await client.contents
  .list('posts')
  .filter('category', 'eq', 'sport')
  .filter('date', 'gte', '2023-01-01')
  .sort('date', 'desc')
  .page(1)
  .size(10)
  .execute();
```
