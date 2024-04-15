import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Lined = () =>
  <Example
    code="lined"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>lined</code> property can be used to add a CSS class
      to add a line between the summary and content.
    </p>
  </Example>

export default Lined