import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Sortable = () =>
  <Example
    code="sortable"
    Component={Component}
    Source={Source}
    highlightLines="6"
    undent={2}
    expand
  >
    <p>
      The <code>sorted</code> property can be set to <code>false</code>{' '}
      to prevent the column from being used to sort the rows.
    </p>
  </Example>

export default Sortable