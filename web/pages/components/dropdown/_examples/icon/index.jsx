import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Icon = () =>
  <Example
    code="icon"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>icon</code> property can used to define an icon for the
      trigger.  The <code>iconClass</code> can be used to add a CSS class
      for it.
    </p>
  </Example>

export default Icon