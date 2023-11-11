import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Disabled = () =>
  <Example
    code="disabled"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>disabled</code> property can be set to disable a button.
    </p>
  </Example>

export default Disabled