import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Radius = () =>
  <Example
    code="radius"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>radius</code> property can be used to set the border radius.
    </p>
  </Example>

export default Radius