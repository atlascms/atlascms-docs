# Filtering Contents

As described in [Filtering](/api-overview/filtering), Contents is one of the entities that can be filtered and paged. Every content collection can be filtered supplying **Querystring** parameters to the `GET` request.

## Parameters

- **locale:** (optional) The locales of contents to filter. If not provided the default locale will be used.
- **stage:** (optional) `published` or `unpublished` or `all`. Default: `published`
- **filter:** (optional) Pass as many filter parameters as you want based on the fields available for the Model

Example - filter `products` with price > 10 and category in sport or outdoor:

```
https://{baseUrl}/contents/products?filter[price][gt]=10&filter[category][any]=sport,outdoor
```

Filter parameters allow you to filter by the 1st level of nested **component** using **dot notation**.

Example - if `customers` Model has a component field `home_address` with fields `street` and `city`:

```
https://{baseUrl}/contents/customers?filter[home_address.city][eq]=New York
```

## Field Operators

The available operators for filtering contents:

| Operator | Description |
|----------|-------------|
| eq | equals |
| neq | not equals |
| contains | contains |
| ncontains | not contains |
| starts | starts with |
| nstarts | not starts with |
| ends | ends with |
| nends | not ends with |
| any | contains any (comma separated) |
| nany | not contains any (comma separated) |
| gt | greater than |
| gte | greater than or equal |
| lt | less than |
| lte | less than or equal |
| all | contains all (comma separated) |

## Operators per Field Type

### Text
eq, neq, any, nany, contains, ncontains, starts, nstarts, ends, nends

### Rich Text
contains, ncontains

### Number
eq, neq, any, nany, gt, gte, lt, lte

### Yes/No
eq

### Date
eq, neq, gt, gte, lt, lte

### Date & Time
eq, neq, gt, gte, lt, lte

### Time
eq, neq, gt, gte, lt, lte

### Single Choice
eq, neq

### Enumeration
any, nany, all

### Media
eq, neq, any, nany

### Media Gallery
any, nany, all

### Color Picker
eq, neq

### Value Array
any, nany, all

### Key/Value, Json
Not filterable.

### Component
Not filterable directly. Filter nested fields using dot notation (e.g. `home_address.city`).

### Multi Component
Not filterable.
