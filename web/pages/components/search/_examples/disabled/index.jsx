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
    highlightLines="2"
  >
    <p>
      The <code>disabled</code> property can be used to disable the search
      component.
    </p>
  </Example>

export default Disabled
