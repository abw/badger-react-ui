import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="middle"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>middle</code> property aligns the child elements vertically to the middle,
      equivalent to setting <code>align-items: center</code>.
    </p>
  </Example>

export default FlexExample
