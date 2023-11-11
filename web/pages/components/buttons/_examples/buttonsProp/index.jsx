import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Buttons = () =>
  <Example
    code="buttons"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>buttons</code> property can be used to define properties
      for a set of buttons.
    </p>
  </Example>

export default Buttons