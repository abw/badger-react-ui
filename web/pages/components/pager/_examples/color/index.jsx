import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Color = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    undent={4}
  >
    <p>
      The <code>color</code> property can be used to set the color range
      used for the buttons.  This is a short-cut which adds the specified
      color to the CSS class for the pager container.
    </p>
  </Example>

export default Color