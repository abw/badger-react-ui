import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const MinWidth = () =>
  <Example
    code="minWidth"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>minWidth</code> property can be used to set the minimum width
      of a tile.
    </p>
  </Example>

export default MinWidth