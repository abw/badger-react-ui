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

## Search

## Select

## Details

* Custom icon

## Dropdown

* openOnHover mode should focus trigger on hover so it can receive keyboard
events

## WithIcon

The `.icon.on-left` and `.icon.on-right` classes are only defined in the
scope of buttons in badger-css.