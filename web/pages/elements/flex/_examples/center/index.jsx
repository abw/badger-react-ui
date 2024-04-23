import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="center"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>center</code> property aligns the child elements to the center,
      equivalent to setting <code>justify-content: center</code>.
    </p>
  </Example>

export default FlexExample
