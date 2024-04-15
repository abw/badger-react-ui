import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Lined = () =>
  <Example
    code="lined"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>lined</code> property can be used to add a line under the tabs.
    </p>
  </Example>

export default Lined
