import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="baseline"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>baseline</code> property aligns the child elements vertically to the baseline,
      equivalent to setting <code>align-items: baseline</code>.
    </p>
  </Example>

export default FlexExample
