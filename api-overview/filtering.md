# Filtering

Some entities in Atlas CMS allow the user to filter the results supplying **Querystring** parameters to the `GET` request.

To filter results you have to supply the following Querystring parameter to the endpoint that can expect it:

- **filter:** (optional) It can pass as many filter parameters you want based on the fields available for the Entity

The `filter` parameter has a specific syntax to allow you to define the type of filters to apply.

It is composed as: `filter[{field}][{operator}]={value}`

For example, the following URL filters the `products` collection to get only the products that have a `price` field greater than $10 and that belong to the Sports or Outdoor `category`:

```
https://{baseUrl}/contents/products?filter[price][gt]=10&filter[category][any]=sport,outdoor
```

**Filterable Entities are:**

- Contents
- Media
- Users

::: tip
In the next chapters you will discover which filters can be used for each Entity type as well as some examples.
:::

## Filter Operators

The available operators for filtering are the following:

| Operator | Description |
|----------|-------------|
| `eq` | equals |
| `neq` | not equals |
| `contains` | contains |
| `ncontains` | not contains |
| `starts` | starts with |
| `nstarts` | not starts with |
| `ends` | ends with |
| `nends` | not ends with |
| `any` | contains any. Values must be comma separated |
| `nany` | not contains any. Values must be comma separated |
| `gt` | greater than |
| `gte` | greater than or equal |
| `lt` | less than |
| `lte` | less than or equal |
| `all` | contains all. Values must be comma separated |

## Paging & Sorting

As with filters, some endpoints allow you to request paged entities.

To receive paginated results you need to supply the following **Querystring** parameters to the `GET` request:

| Parameter | Description |
|-----------|-------------|
| **size** | (optional) The number of entries to return per each page. Default: 25. Max: 100 |
| **page** | (optional) The number of the page to return. Default: 1 |
| **sort** | (optional) The field to use as sorter in the form of `{field-name}|{asc\|desc}` |

For example, the following snippet requests 10 `products` from page number 2, sorted by price ascending:

```
https://{baseUrl}/contents/products?page=2&size=10&sort=price|asc
```

::: tip
When in the API Reference you find the querystring parameters page, size, sort it means you can apply the pagination as we described above.
:::
