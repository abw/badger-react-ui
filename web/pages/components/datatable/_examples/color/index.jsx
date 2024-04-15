import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Color = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={4}
    expand
  >
    <p>
      The <code>color</code> property can be used to define the color range
      used for the data table.
    </p>
  </Example>

export default Color