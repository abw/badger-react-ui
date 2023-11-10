import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnDismiss = () =>
  <Example
    code="onDismiss"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>onDismiss</code> property can be used to register a function
      which will be called when the alert is dismissed.
    </p>
  </Example>

export default OnDismiss