import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Border = () =>
  <Example
    code="border"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>border</code> property is a shortcut to set the border width.
    </p>
  </Example>

export default Border
