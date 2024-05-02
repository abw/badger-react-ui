# TODO

## General

* Consistent policy for handler functions (e.g. in Search, Select, etc).
The `onLoad` and `onUnload` handlers should *probably* pass the object
itself.  Others, e.g. `onFocus`, `onBlur`, etc., should *probably* pass
the context returned from `getContext()`

* Have `Children` for headless components which will render functions.

## Styling

* Search and Select should share styles for results/options and should inherit
from form styles

# Components

## Accordion

Implemented as wrapper around details with flag to define it multiple
leaves can be open or just one.

## Alert

## DataTable

Headings wrap

Option in columns pull-down to reset columns

Option to NOT display filter or allow column to be sorted

Should the filter/columns selectors be Details that open up?

## DataTables

(note the plural) - variant of DataTable that displays each row as a
separate table (or other layout), for times when you have a large number
of columns.  Would be nice if this was built into DataTable so it could
switch between one and the other on a responsive breakpoint.

## Radio

Renderer for option.text/option.label/option.name

Matcher to detect selected option

## Search / Select / Dropdown

Search should use the same base context as dropdown/select.
Some inconsistencies to iron out.

The gap between input and menu can be confusing when there are other form
component poking through the gap.

## Select with search option

Cursor doesn't get reset when closing (which is good). But if the cursor is
moved from the current selected option and then the menu is closed and
re-opened, the cursor will be at the moved position, not on the currently
selected option.  This is arguably correct, but intuitively a bit weird.

Styling of search in select component is different to search.

Search input can be obscured by next field - fixed by z-index but hard-coded

## Sortable

Adding dnd kit increased the bundle size from 68k to 148k.  Is it really
worth it?  How hard would it be to implement just the bits we need?

# Utilities

# Documentation

Document context for Dropdown, Dropdown menu, Search, Datatable

Datatable components and options
