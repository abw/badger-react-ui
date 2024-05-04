import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Filterable = () =>
  <Example
    code="filterable"
    Component={Component}
    Source={Source}
    highlightLines="6"
    undent={2}
    expand
  >
    <p>
      The <code>filterable</code> property can be set to <code>false</code>{' '}
      to prevent the column from being filtered.
    </p>
  </Example>

export default Filterable