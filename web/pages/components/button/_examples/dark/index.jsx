import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Dark = () =>
  <Example
    code="dark"
    Component={Component}
    Source={Source}
    highlightLines="9"
    undent={2}
    expand
  >
    <p>
      The <code>dark</code> property can be added to make the buttons
      darker than normal.
    </p>
  </Example>

export default Dark