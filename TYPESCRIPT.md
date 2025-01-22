# Notes for Typescript Migration

## General Issues

Should we export all the sub-components, e.g. BadgePrefix, BadgeSuffix?
(I think not)

Should we theme all sub-components, e.g. CheckboxInput, CheckboxLabel
(I think not)

Component like Button seem to be able to accept any properties.

    <Button notAllowed="NOPE"/>

This just ends up being passed to the `<button>` element and raising a
warning.

There seems to be a fundamental problem when trying to pass a component
with non-optional children to `Themed()`:

    Property 'children' is missing in type 'Record<string, unknown>'

Hmmm... maybe it's a problem with any non-optional properties.  Time to
revisit react-one-louder.
UPDATE: so it's seems it's an inherent issue when using an interface.
Sub-optimal fix is to use a type instead.

## Components

    [X] Accordion
    [X] Alert
        Removed Alert.Info, Alert.Success, etc.
    [X] Badge
    [X] Button
    [X] Buttons
    [X] Checkbox
        Consider changing `ref` to be `labelRef` (alongside `inputRef`)
    [X] Confirm
    [ ] DataTable
    [ ] DataTables
    [X] Details
    [X] Dropdown
    [X] DropdownMenu
    [ ] Form
    [X] Icon
    [X] Modal
    [ ] MultiSelect
    [X] Overlay
    [X] Pager
    [X] Radio
    [X] Range
    [ ] RangeMax
    [ ] RangeMin
    [X] Search
    [X] Select
    [ ] Sortable
    [X] Spinner
    [ ] Table
    [X] Tabset
    [X] Tiles
    [X] Toggle

## Notes

### Icon

`WithIcons` props - can the icons be react components and props objects
as well as strings?

