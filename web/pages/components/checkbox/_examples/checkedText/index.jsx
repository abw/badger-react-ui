import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Checked = () =>
  <Example
    code="checkedText / uncheckedText"
    Component={Component}
    Source={Source}
    // undent={4}
    expand
  >
    <p>
      The <code>checkedText</code> and <code>uncheckedText</code> properties
      can be used to provide different text for the checked and unchecked
      states.
    </p>
  </Example>

export default Checked