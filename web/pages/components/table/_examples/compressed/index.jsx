import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Compressed = () =>
  <Example
    code="compressed"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>compressed</code> property is a shortcut to add the{' '}
      <code>compressed</code> CSS class which reduces the padding in each
      cell.  The <code>compact</code> property is provided as an alias for
      this for backward compatibility with previous versions.
    </p>
  </Example>

export default Compressed
