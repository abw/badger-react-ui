import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Right = () =>
  <Example
    code="right"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>right</code> property can added to align the dropdown
      menu to the right edge of the trigger
    </p>
  </Example>

export default Right