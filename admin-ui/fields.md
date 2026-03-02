# Fields

Each field has common properties you can edit when you add a field or also after it has been created.

![Field properties panel when editing a model field](/images/modelbuilder-edit-field.png)

| Property | Description |
|----------|-------------|
| **Name** | The label of the field shown on the edit of a content |
| **Hint** | (optional) A help text |
| **Key** | The name of the field in the API responses |
| **Enable Localization** | If the field can be localized. If false changing the value of the field will replace the value on all available languages of the content |
| **This field is required** | If the field is mandatory |
| **Hidden Field** | Hides the field from the UI, but it will be available via API |
| **Read Only** | Show the field in the UI in read-only mode, but it will be available via API |

::: tip
Each type of field can have other settings or validation that depends on the specific field type. The following sections describe the specific settings per each field and their behaviours in the API request/responses.
:::

<div class="fields-container">

<details>
<summary>Text</summary>
<div class="field-content">

The simplest type of field. It renders an Input Field or a Text Area based on settings.

- **Unique:** (Rule) The value of the field must be unique inside the collection
- **Use as title:** This field is used as the value of rows when selecting the content from a relations field
- **Default Value:** The default value of the field
- **Editor:** The editor to use while editing contents. Can be a Text Input or a multiline Text area
- **Number of chars:** (Rule) The min/max number of chars allowed

</div>
</details>

<details>
<summary>Rich Text</summary>
<div class="field-content">

It renders an input box for rich content editing.

- **Editor:** The editor to use while editing contents. Can be HTML or Markdown
- **Number of chars:** (Rule) The min/max number of chars allowed

</div>
</details>

<details>
<summary>Number</summary>
<div class="field-content">

It renders an input box that allows only digital inputs.

- **Default Value:** The default value of the field
- **Type:** Integer or Decimal
- **Range:** (Rule) The min/max number allowed

</div>
</details>

<details>
<summary>Yes/No</summary>
<div class="field-content">

A boolean field, that renders a switch input.

- **Default Value:** The default value of the field. Can be true, false, 1 or 0

</div>
</details>

<details>
<summary>Date</summary>
<div class="field-content">

It renders a Date Picker input.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Date & Time</summary>
<div class="field-content">

It renders a Date & Time Picker input.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Time</summary>
<div class="field-content">

It renders a Time Picker input.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Single Choice</summary>
<div class="field-content">

The single choice field allows you to select an element from a list of predefined values. It renders a Radio Button List or a Select based on settings.

- **Editor:** Select or Radio Button
- **Values:** The list of predefined values. Each row represents a value

</div>
</details>

<details>
<summary>Enumeration</summary>
<div class="field-content">

The enumeration field allows you to select 1 or multiple elements from a list of predefined values. It renders a Checkbox List or a Multi Select based on settings.

- **Editor:** Checkboxes or Multi select
- **Values:** The list of predefined values. Each row represents a value
- **Min/Max Selection:** (Rule) The min/max number of selectable elements

</div>
</details>

<details>
<summary>Tags</summary>
<div class="field-content">

It renders a Tagged input.

- **Min/Max Selection:** (Rule) The min/max number of Tags allowed

</div>
</details>

<details>
<summary>Media</summary>
<div class="field-content">

It renders a Media Selector Modal to select an asset from the Media Library.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Media Gallery</summary>
<div class="field-content">

It renders a Media Selector Modal to select multiple assets from the Media Library.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Color Picker</summary>
<div class="field-content">

It renders a Color Picker input to visually select a color in HEX format.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Map</summary>
<div class="field-content">

It renders a Leaflet Map with the option to search by location or by coordinates.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Key/Value</summary>
<div class="field-content">

It renders repeatable Key/Value input text fields.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Value Array</summary>
<div class="field-content">

It renders repeatable Text input fields.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Json</summary>
<div class="field-content">

It renders a code editor control with syntax highlight and formatting.

Json Fields are useful in all situations where you need to store a custom structure of data and retrieve it as a Json Object instead of a string or other primitive types.

::: tip
Doesn't have extra settings
:::

</div>
</details>

<details>
<summary>Relations</summary>
<div class="field-content">

It renders a table to manually select related contents of other models.

- **Allowed Type:** The type of content allowed

</div>
</details>

<details>
<summary>Component</summary>
<div class="field-content">

It renders the controls defined in a component.

- **Allowed Type:** The component allowed

</div>
</details>

<details>
<summary>Multi Components</summary>
<div class="field-content">

It renders a repeatable and orderable list of components.

- **Allowed Types:** The types of content allowed

</div>
</details>

</div>
