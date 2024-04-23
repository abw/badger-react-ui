import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="radius"
    Component={Component}
    Source={Source}
    highlightLines="8"
    expand
    undent={2}
  >
    <p>
      The <code>radius</code> property can be used to set the border radius
      in units of 0.25rem.  It defaults to 1 unit when used as a boolean flag.
    </p>
  </Example>

export default DivExample
