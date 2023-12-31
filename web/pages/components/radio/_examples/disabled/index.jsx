import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Disabled = () =>
  <Example
    code="disabled"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>disabled</code> property can be added to an option to
      disable it.
    </p>
  </Example>

export default Disabled