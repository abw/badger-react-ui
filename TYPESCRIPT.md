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
    [X] RangeMax
    [X] RangeMin
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

## Context Cleanup

Convert DropdownMenu context to functional component and useTrigger / useCursor

Convert Range context to functional component

Convert Search context to functional component

Convert Select context to functional component

## Select Context

    [ ] onFocus, onBlur, onOpen, onClose, etc.  Handlers could be passed in.
    [X] menuRef, activeRef and scrolling
    [ ] closeable should account for searchFocus
    [X] Re-opening select should not reset existing cursor or current value
        (displayed in input) but it SHOULD clear selected item that otherwise
        would be highlighted in the menu
    [ ] Search
    [ ] Close should clear search input and reset options, e.g. if previously
        limited by a search
    [ ] Handle change of options (including search)
    [ ] Initial value state