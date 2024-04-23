import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    highlightLines="2,5"
    expand
    undent={2}
  >
    <p>
      The <code>size</code> property can be used to set the font size.
      Or you can add one of the size classes ({' '}
      <code>smallest</code>,{' '}
      <code>smaller</code>,{' '}
      <code>small</code>,{' '}
      <code>medium</code>,{' '}
      <code>large</code>,{' '}
      <code>larger</code> or{' '}
      <code>largest</code>) as a property.
    </p>
  </Example>

export default DivExample
