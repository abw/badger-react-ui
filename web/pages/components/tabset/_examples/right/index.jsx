import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Right = () =>
  <Example
    code="right"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>right</code> property can be added to right align the tabs.
    </p>
  </Example>

export default Right
