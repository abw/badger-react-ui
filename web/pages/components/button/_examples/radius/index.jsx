import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Radius = () =>
  <Example
    code="radius"
    Component={Component}
    Source={Source}
    highlightLines="5,10,15,20"
    undent={2}
  >
    <p>
      The <code>radius</code> property can be used to set the border radius
      in multiples of the base unit: 0.25rem.
    </p>
  </Example>

export default Radius