import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="style"
    Component={Component}
    Source={Source}
    highlightLines="2,5"
    expand
    undent={2}
  >
    <p>
      The <code>style</code> property can be used to pass additional styling
      to the element.
    </p>
  </Example>

export default DivExample
