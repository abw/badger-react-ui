import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Checked = () =>
  <Example
    code="checkedText"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={4}
    expand
  >
    <p>
      The <code>checkedText</code> property can be used to provide different
      text for the checked state.
    </p>
  </Example>

export default Checked