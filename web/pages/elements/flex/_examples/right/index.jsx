import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="right"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>right</code> property aligns the child elements to the right,
      equivalent to setting <code>justify-content: flex-end</code>.
    </p>
  </Example>

export default FlexExample
