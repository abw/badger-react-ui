import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Outline = () =>
  <Example
    code="outline"
    Component={Component}
    Source={Source}
    highlightLines="5,10,15"
    undent={2}
    expand
  >
    <p>
      The <code>outline</code> property can be added for outline buttons.
    </p>
  </Example>

export default Outline