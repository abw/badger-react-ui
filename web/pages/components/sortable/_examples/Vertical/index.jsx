import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Vertical = () =>
  <Example
    code="VerticalSort"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>VerticalSort</code> component works exactly the same as{' '}
      <code>Sortable</code> but constricts the items to be sorted vertically.
      This is a shortcut for setting the <code>direction</code> property
      on <code>Sortable</code> to be <code>vertical</code>.
    </p>
  </Example>

export default Vertical