import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="shadow"
    Component={Component}
    Source={Source}
    highlightLines="2,5"
    expand
    undent={2}
  >
    <p>
      The <code>shadow</code> property can be used to add a drop shadow.
      It can be specified as a boolean flag or an integer from 1 to 5.
    </p>
  </Example>

export default DivExample
