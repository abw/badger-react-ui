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
  >
    <p>
      The <code>color</code> property can be used to set the color range
      for the tabs.
    </p>
  </Example>

export default Color
