import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Radius = () =>
  <Example
    code="radius"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>radius</code> property can be used to add a border radius.
      It can be a simple flag (equivalent to <code>radius={1}</code>) or an
      integer corresponding to the radius in units of 0.25rem.
    </p>
  </Example>

export default Radius