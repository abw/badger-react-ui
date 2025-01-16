# Notes for Typescript Migration

## General Issues

Should we export all the sub-components, e.g. BadgePrefix, BadgeSuffix?
(I think not)

Should we theme all sub-components, e.g. CheckboxInput, CheckboxLabel
(I think not)

## Components

    [ ] Accordion
        Depends on Details
    [X] Alert
        Removed Alert.Info, Alert.Success, etc.
    [X] Badge
    [X] Button
    [X] Buttons
    [X] Checkbox
        Consider changing `ref` to be `labelRef` (alongside `inputRef`)
    [ ] Confirm
    [ ] DataTable
    [ ] DataTables
    [ ] Details
    [ ] Dropdown
    [ ] DropdownMenu
    [ ] Form
    [ ] Icon
    [ ] Modal
    [ ] MultiSelect
    [ ] Overlay
    [ ] Pager
    [ ] Radio
    [ ] Range
    [ ] RangeMax
    [ ] RangeMin
    [ ] Search
    [ ] Select
    [ ] Sortable
    [ ] Spinner
    [ ] Table
    [ ] Tabset
    [ ] Tiles
    [ ] Toggle

## Notes

### Icon

`WithIcons` props - can the icons be react components and props objects
as well as strings?

