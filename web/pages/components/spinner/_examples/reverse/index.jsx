import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Reverse = () =>
  <Example
    code="reverse"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>reverse</code> property can be used to reverse the direction
      of spin.
    </p>
  </Example>

export default Reverse
