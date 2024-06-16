import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Sortable = () =>
  <Example
    code="sortable"
    Component={Component}
    Source={Source}
    highlightLines="8"
  >
    <p>
      The <code>sortable</code> property can be set to make the selected
      items sortable.
    </p>
  </Example>

export default Sortable
