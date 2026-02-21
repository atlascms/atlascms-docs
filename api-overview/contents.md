# Contents

In Atlas CMS, **Contents** are the entities you add through the Admin UI or the API. They are composed by a common set of properties and the set of attributes specified in the model.

## Content Object

The Content data model is like the following:

```json
{
  "id": "string",
  "locale": "string",
  "createdAt": "datetime",
  "createdBy": "string",
  "modifiedAt": "datetime",
  "modifiedBy": "string",
  "hash": "string",
  "stage": "string",
  "modelId": "string",
  "modelKey": "string",
  "attributes": {
    "prop1": "...",
    "prop2": "..."
  },
  "locales": [
    {
      "id": "string",
      "culture": "string"
    }
  ]
}
```

| Property | Description |
|----------|-------------|
| id | The Entity ID |
| locale | The Entity Locale. If Model is not localizable this property is not available |
| createdAt | Creation date (UTC) |
| createdBy | The username of the user who created the Entity |
| modifiedAt | Modify date (UTC) |
| modifiedBy | The username of the user who modified the Entity |
| stage | `published` or `unpublished`. If Model doesn't have Stage mode active this property is not available |
| modelId | The ID of the model |
| modelKey | The API Key name of the model |
| attributes | The object with the properties defined in the model |
| locales | The list of translations id/culture. If Model is not localizable this property is not available |
| hash | The hash representation of the attributes |

## Attributes and Fields

The Content object contains an `attributes` property. Inside it are all the fields, in the form of JSON properties, defined for the model with the relative value inserted for the Content.

Each field can be filtered using specific field operators. Check [Filtering Contents](/api-overview/filtering-contents) for all available filtering options.

## Field Representations

Each field has its own JSON representation which corresponds to the underlying data type:

| Field Type | Data type |
|------------|-----------|
| Text | `string` |
| Rich Text | `string` |
| Number | `integer` or `decimal` |
| Yes/No | `boolean` |
| Date | `string` (ISO date) |
| Date & Time | `string` (ISO datetime) |
| Time | `string` |
| Single Choice | `string` |
| Enumeration | `Array of strings` |
| Media | `string` (id) or `object` (when resolve=media) |
| Media Gallery | `Array of strings` or `Array of objects` (when resolve=media) |
| Map | `object` with coordinates |
| Key/Value | `Array of objects` `[{"key":"key1","value":"value1"},...]` |
| Value Array | `Array of strings` |
| Json | `object` or `array` |
| Relations | `Array of strings` (ids) or `Array of objects` (when resolve=relations) |
| Component | `object` |
| Multi Component | `Array of objects` |

### Media and Relations

When **sending** data:
- Media: Can be `string` (id) or `object` (media object)
- Relations: Can be `Array of strings` (content ids)

When **receiving** data:
- Media: `string` (id) or `object` (if `resolve=media` parameter is passed)
- Relations: `Array of strings` (ids) or `Array of objects` (if `resolve=relations` is passed)

## API Endpoints

| Operation | Method | Endpoint |
|-----------|--------|----------|
| List Contents | GET | `/contents/{model-key}` |
| Count Contents | GET | `/contents/{model-key}/count` |
| Get Content | GET | `/contents/{model-key}/{id}` |
| Create Content | POST | `/contents/{model-key}` |
| Update Content | PUT | `/contents/{model-key}/{id}` |
| Delete Content | DELETE | `/contents/{model-key}/{id}` |
| Duplicate Content | POST | `/contents/{model-key}/{id}/duplicate` |
| Create Translation | POST | `/contents/{model-key}/{id}/create-translations` |
| Publish Content | POST | `/contents/{model-key}/{id}/publish` |
| Unpublish Content | POST | `/contents/{model-key}/{id}/unpublish` |
| Delete all | DELETE | `/contents/{model-key}/clear` |

::: tip
Content update API acts like a patch for the attributes object. To clean up a field, pass it with `null`. Fields not in the model are skipped.
:::
