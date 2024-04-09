import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Color = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    expand
    undent={4}
  >
    <p>
      The <code>color</code> property can be used to set the color range
      for the buttons.
    </p>
  </Example>

export default Color
