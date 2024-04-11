import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Cols = () =>
  <Example
    code="cols"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>cols-N</code> property can be added to an immediate child
      element to make it span a number of columns.
    </p>
  </Example>

export default Cols
