import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Compressed = () =>
  <Example
    code="compressed"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>compressed</code> property is a shortcut to add the{' '}
      <code>compressed</code> CSS class which reduces the padding in each
      cell.
    </p>
  </Example>

export default Compressed
