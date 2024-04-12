import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Expanded = () =>
  <Example
    code="expanded"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>expanded</code> property is a shortcut to add the{' '}
      <code>expanded</code> CSS class which increases the padding in each
      cell.
    </p>
  </Example>

export default Expanded
