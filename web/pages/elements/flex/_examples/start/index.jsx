import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="start"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>start</code> property aligns the child elements to the top,
      equivalent to setting <code>align-items: flex-start</code>.
    </p>
  </Example>

export default FlexExample
