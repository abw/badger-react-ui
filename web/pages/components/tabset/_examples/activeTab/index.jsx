import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ActiveTab = () =>
  <Example
    code="activeTab"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>activeTab</code> property can be used to set the active tab.
      It should be an integer representing the index in <code>tabs</code>,
      e.g. from <code>0</code> to <code>tabs.length - 1</code>.
    </p>
  </Example>

export default ActiveTab
