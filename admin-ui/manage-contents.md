# Manage Contents

In the Content Management section of the Atlas CMS Admin UI, you have the tools to manage your content based on the Models you've set up within the platform.

Atlas CMS is designed for ease of use, allowing you to perform essential tasks such as listing, searching, creating, editing, and publishing content seamlessly.

The flexibility of our CMS shines through the ability to define Models that mirror the structure of your content precisely. Whether you manage articles, images, videos, or any other content type, our platform adapts to your specific requirements.

::: tip
When a Model is added to your project a new menu element appears in the left sidebar. Selecting it, takes you to the List of contents for that Model.
:::

## List Contents

This page allows you to access all contents created for the specific Model, in any locales. They are paginated and you can use the search functionalities to filter them.

In this page you can:

- Filter the contents by locale
- Select the number of items you want to display per each page
- Navigate across the pages
- Search contents by a free text search input

::: tip
When you search by free text it searches the words contained in every text or rich text field defined in the Model. If no other filter is active, it searches the contents in the active Locale selected in the dropdown and in any Stage.
:::

::: tip
Locales are shown only if the Model has the option Localizable active. Stage is shown only if the Model has the option Enable Stage Mode active.
:::

### Column Selector

Atlas CMS doesn't know upfront which are the fields you created that you want to show in the table. This is why every Content List Table shows only the default columns id, Created At, Modified At, Locales, Stage. You can change the default columns per each model, selecting the attributes you prefer to show on the Table. For this you can click the columns icon. A right panel will appear allowing you to select and order the columns you want to show in the Table.

![Column Selector panel to choose and order table columns](/images/contents-column-selector.png)

## Create Contents

At the beginning the list is empty because there are no contents to display, and you can start creating using the Create Item button, available on the top right corner of the page.

Creating a new content takes you to an edit page where all fields are shown ready to be filled.

After you finished to fill the fields you can click the Save Button.

If everything is ok Atlas CMS will redirect you to the Edit Page where you have other options, otherwise if there are errors in the page, they are shown below the fields or via a Toast error badge on the top right of the page.

::: tip
When a Model is Localizable the content will be created in the language selected in the Dropdown on the content list page.
:::

## Edit Contents

The Edit Page gives you a complete overview of the content along with the ability to edit all content data. The page is split in 2 columns. On the Left you have the Edit Panel and on the right the Info Panel.

::: tip
The Save Button is visible, but not clickable until the content changes.
:::

### The Edit Panel

Each field defined in the Model is rendered in the left panel as a single box. Every field renders a Title and an optional Help Text, configured in the Model Builder.

Next to the Label you can also find:

- `*` in case the field is configured as **Required**
- 🌐 in case the field is localizable

::: tip
If a field is configured as Localizable, you need to set the value per each locale. On the other side, if it is not Localizable the value you set for the field in a locale will be used on every other localized version of the content.
:::

### The Info Panel

The Info Panel on the right contains 3 main blocks: System Information, Links and Code.

The **System Information** block contains:

- The human readable locale of the content. Shown only if the Model has the option Localizable active
- The stage published/unpublished. Shown only if the Model has the option Enable Stage Mode active
- The ID
- The create date
- The modify date

The **Links** block contains the composed links you defined in the Model settings. If no links are available, this block is not visible.

The **Code** block contains a tabbed view of code snippets in popular programming languages to get the content from the API.

![Edit page with Content Information panel showing status and publish/unpublish](/images/contents-infopanel.png)

## Single Content

It can happen that for your project you need a Model for contents that needs only 1 content and not a list. For example you can have the need to have a place to set configurations or for lookups of forms or any other purpose that require a place to set data, but they are not a list.

For these scenarios if the Model has the option **This collection allows only 1 element** the Content list page is not available and when you access the content from the left sidebar, Atlas redirects you to the edit page.

When you work with single documents you can have at max 1 document and its localized versions.

::: tip
You can switch the option **This collection allows only 1 element** for the Model every time you want. In case you have already created multiple documents, Atlas will keep them, but only the first will be used.
:::

## Publish/Unpublish

Atlas CMS allows you to configure Models to have Staging environment for contents.

When the Model has the option **Enable Stage Mode** active, Atlas enables the publish/unpublish feature on contents.

As soon as you create new contents, Atlas puts them in the unpublished stage, and from the Edit page you can change the stage with the Publish Button that becomes available next to the Save button.

If the content is not Localizable or it is available in only 1 locale, Atlas displays the publish button and the unpublish button depending on the current stage of the content.

If the content is available in more than 1 language, Atlas displays only the publish button that opens a popup that allows you to select which locales should be published or unpublished.
