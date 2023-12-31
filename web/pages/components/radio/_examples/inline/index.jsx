import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Inline = () =>
  <Example
    code="inline"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>inline</code> property can be set to create inline radio
      buttons.
    </p>
  </Example>

export default Inline