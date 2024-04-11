import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Rows = () =>
  <Example
    code="rows"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>rows-N</code> property can be added to an immediate child
      element to make it span a number of rows.
    </p>
  </Example>

export default Rows
