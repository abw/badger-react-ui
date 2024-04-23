import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    highlightLines="2,5"
    expand
    undent={2}
  >
    <p>
      The <code>color</code> property can be used to define colors for the
      element.  It should start with a string indicating the color range,
      followed by one to four numbers as the color stops for foreground
      and background colors in light and dark modes, respectively.
    </p>
  </Example>

export default DivExample
