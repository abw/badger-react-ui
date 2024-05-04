# TODO

## General

* Consistent policy for handler functions (e.g. in Search, Select, etc).
The `onLoad` and `onUnload` handlers should *probably* pass the object
itself.  Others, e.g. `onFocus`, `onBlur`, etc., should *probably* pass
the context returned from `getContext()`

* Have `Children` for headless components which will render functions.

* Cleanup constants

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

Should the filter/columns selectors be Details that open up?

## Details

Add sliding animation like Drawer

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
UPDATE: after adding badger-form, badger-icon and floating-ui it's now at
around 250k.  So dnd kit is around 30% of the total which is more tolerable
than the 55% when I first added it.

# Utilities

# Documentation

Document context for Dropdown, Dropdown menu, Search, Datatable

Datatable components and options
