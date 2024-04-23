import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="end"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>end</code> property aligns the child elements to the end,
      equivalent to setting <code>align-items: flex-end</code>.
    </p>
  </Example>

export default FlexExample
