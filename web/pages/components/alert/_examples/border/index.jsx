import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Border = () =>
  <Example
    code="border"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>border</code> property can be used to add a border.  This can
      be a number to indicate the border width.
    </p>
  </Example>

export default Border