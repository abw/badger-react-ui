import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Border = () =>
  <Example
    code="border"
    Component={Component}
    Source={Source}
    highlightLines="6,12,18,24"
    undent={2}
  >
    <p>
      The <code>border</code> property can be used to set the border width.
      This is only really noticeable on outline buttons.  There is a border
      around solid buttons (mainly to help in matching the height of other
      form inputs), although it&apos;s the same color as the background.
    </p>
  </Example>

export default Border