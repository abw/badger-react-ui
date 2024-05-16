import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Switch = () =>
  <Example
    code="switch"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={4}
    expand
  >
    <p>
      The <code>switch</code> property can be used to render the checkbox
      as a switch.
    </p>
  </Example>

export default Switch