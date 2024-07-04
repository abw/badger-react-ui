import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DisplayOption = () =>
  <Example
    code="displayOption"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>displayOption</code> property can be used to define a custom
      function for rendering each option.
    </p>
  </Example>

export default DisplayOption