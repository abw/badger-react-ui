import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Size = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>size</code> property can be used to set the table size
      using one of the semantic size classes (<code>smallest</code>,{' '}
      <code>smaller</code>, <code>small</code>, <code>large</code>,{' '}
      <code>larger</code> or <code>largest</code>) or one of the size
      multipliers (<code>x2</code>, <code>x3</code>, etc.)
    </p>
  </Example>

export default Size
