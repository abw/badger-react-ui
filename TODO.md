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

## Search / Select / Dropdown

Should use the same base context.  Some inconsistencies to iron out,
e.g. select has options, dropdown has items (go with options); select uses
selecting, dropdown uses isOpen (go with isOpen)

## Details

* Custom icon


## WithIcon

The `.icon.on-left` and `.icon.on-right` classes are only defined in the
scope of buttons in badger-css.