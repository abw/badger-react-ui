import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="valuesSize"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>valuesSize</code> property (or <code>valueSize</code> as an alias)
      can be specified to set the size for the displayed value(s).
      It can be set to any of the standard sizes: <code>smallest</code>,{' '}
      <code>smaller</code>, <code>small</code>, <code>medium</code>,{' '}
      <code>large</code>, <code>larger</code> or <code>largest</code>.
      The default value is <code>small</code>.
    </p>
  </Example>

export default RangeExample