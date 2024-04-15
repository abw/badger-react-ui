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
  >
    <p>
      The <code>icon</code> property can be used to add an icon to a badge.
    </p>
  </Example>

export default Icon