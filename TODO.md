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

## Alert

## Radio

Renderer for option.text/option.label/option.name

Matcher to detect selected option

## Search / Select / Dropdown

Search should use the same base context as dropdown/select.
Some inconsistencies to iron out,

## Details

* Custom icon

## WithIcon

The `.icon.on-left` and `.icon.on-right` classes are only defined in the
scope of buttons in badger-css.