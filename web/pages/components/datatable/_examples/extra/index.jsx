import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Extra = () =>
  <Example
    code="extra"
    Component={Component}
    Source={Source}
    highlightLines="9,12,21,34"
    undent={2}
    expand
  >
    <p>
      The <code>extra</code> property can be used to define some additional
      data that should be passed to the <code>onRowClick</code>,{' '}
      <code>rowClass</code> and column <code>display</code> functions.
    </p>
  </Example>

export default Extra