import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Checked = () =>
  <Example
    code="checked"
    Component={Component}
    Source={Source}
    // undent={4}
    expand
  >
    <p>
      The <code>checked</code> property should be passed to indicate if the
      checkbox is checked (<code>true</code>) or not (<code>false</code>).
    </p>
  </Example>

export default Checked