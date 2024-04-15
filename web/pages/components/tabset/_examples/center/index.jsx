import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Center = () =>
  <Example
    code="center"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>center</code> property can be added to center align the tabs.
    </p>
  </Example>

export default Center
