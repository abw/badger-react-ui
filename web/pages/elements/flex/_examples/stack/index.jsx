import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="stack"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={4}
  >
    <p>
      The <code>stack</code> property allows you to define the stacking
      breakpoint for the flex container.  When the width of the browser
      window is less than the breakpoint width the elements will stack
      vertically.  Try resizing the browser window to see the effect.
    </p>
  </Example>

export default FlexExample
