import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Color = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    undent={2}
  >
    <p>
      The <code>color</code> property can be used to set the color range
      used for the badge.
    </p>
  </Example>

export default Color