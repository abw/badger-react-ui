import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OpenOnHover = () =>
  <Example
    code="openOnHover"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>openOnHover</code> property can added to make the menu open
      when the mouse hovers over the trigger.
    </p>
  </Example>

export default OpenOnHover