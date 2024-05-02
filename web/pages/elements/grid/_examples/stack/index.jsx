import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const GridExample = () =>
  <Example
    code="stack"
    Component={Component}
    Source={Source}
    highlightLines="1,5,9"
    expand
    undent={4}
  >
    <p>
      The <code>stack</code> property can be used to define a stacking
      breakpoint.  When the width of the browser window is less than the
      breakpoint width the grid element will stack into a single column.
      Try resizing the browser window to see the effect.
    </p>
  </Example>

export default GridExample
