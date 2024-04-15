import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const HeadRows = () =>
  <Example
    code="headRows"
    Component={Component}
    Source={Source}
    highlightLines="4-12,24"
    expand
  >
    <p>
      The <code>headRows</code> property is used to define an array of rows
      for the table header.  The data format is the same as for{' '}
      <code>rows</code> / <code>bodyRows</code>.
    </p>
  </Example>

export default HeadRows
