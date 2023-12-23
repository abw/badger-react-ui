import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnSelect = () =>
  <Example
    code="onSelect"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>onSelect</code> property should be used to define a handler
      which will be called when an item is selected, either by being clicked
      on or by keyboard selection.  The handler will be passed the data for
      the item that was selected.
    </p>
  </Example>

export default OnSelect