import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Shaded = () =>
  <Example
    code="shaded"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>shaded</code> property can be added for shaded buttons.
    </p>
  </Example>

export default Shaded