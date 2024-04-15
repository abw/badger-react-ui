import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Bright = () =>
  <Example
    code="bright"
    Component={Component}
    Source={Source}
    highlightLines="9"
    undent={2}
    expand
  >
    <p>
      The <code>bright</code> property can be added to make the buttons
      brighter than normal.
    </p>
  </Example>

export default Bright