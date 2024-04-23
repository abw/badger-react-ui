import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="evenly"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>space</code> property adds space around elements,
      equivalent to setting <code>justify-content: space-evenly</code>.
    </p>
  </Example>

export default FlexExample
