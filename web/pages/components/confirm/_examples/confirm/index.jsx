import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Confirm = () =>
  <Example
    code="confirm"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>confirm</code> property can be used to set properties for
      the confirmation button.
    </p>
  </Example>

export default Confirm