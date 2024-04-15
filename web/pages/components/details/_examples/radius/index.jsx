import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Radius = () =>
  <Example
    code="radius"
    Component={Component}
    Source={Source}
    highlightLines="4,12"
    undent={4}
    expand
  >
    <p>
      The <code>radius</code> property can be used to set the border radius.
      It should be an integer in units of 0.25rem.
    </p>
  </Example>

export default Radius