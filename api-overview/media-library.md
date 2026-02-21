# Media Library API

The Media Library contains the entities you upload through the Admin UI or the API, and that you can reference within your Contents.

## Media Object

The Media data model:

```json
{
  "id": "string",
  "code": "string",
  "folder": "string",
  "type": "image|video|document",
  "createdAt": "yyyy-MM-ddTHH:mm:ss.fff+HH:mm",
  "createdBy": "string",
  "modifiedAt": "yyyy-MM-ddTHH:mm:ss.fff+HH:mm",
  "modifiedBy": "string",
  "author": "string",
  "copyright": "string",
  "originalFileName": "string",
  "name": "string",
  "format": "string",
  "hash": "string",
  "mimeType": "string",
  "size": 0,
  "url": "string",
  "height": 0,
  "width": 0,
  "horizontalResolution": 0.0,
  "verticalResolution": 0.0,
  "duration": 0,
  "fps": 0,
  "codec": "string",
  "exif": {},
  "metadata": {}
}
```

| Property | Description |
|----------|-------------|
| id | The Entity ID |
| code | The unique code for internal usage |
| folder | The path of the folder where the media is stored |
| type | `image`, `video`, or `document` |
| url | The full URL of the media |
| size | The size in bytes |
| height, width | Dimensions in pixels (image, video) |
| duration, fps, codec | Video-specific properties |
| exif | EXIF information from images |

## Folder Object

| Property | Description |
|----------|-------------|
| id | The Entity ID |
| text | The folder name |
| path | The folder full path |
| children | Array of folder objects |

## API Endpoints

| Operation | Method | Endpoint |
|-----------|--------|----------|
| List Media | GET | `/media-library/media` |
| Get Media | GET | `/media-library/media/{id}` |
| Delete Media | DELETE | `/media-library/media/{id}` |
| Move Media | POST | `/media-library/media/move` |
| List Folders | GET | `/media-library/folders` |
| Create Folder | POST | `/media-library/folders` |
| Rename Folder | POST | `/media-library/folders/rename` |
| Move Folder | POST | `/media-library/folders/move` |
| Delete Folder | DELETE | `/media-library/folders` |

### Query Parameters (List Media)

- **page:** Page number (default: 1)
- **size:** Items per page (default: 25)
- **filter:** Filter parameters
- **sort:** Sort field
- **folder:** Folder path to filter by
- **searchInSubfolders:** Include subfolders in search

::: warning
When you delete a folder the system deletes all sub-folders and files.
:::
