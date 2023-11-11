import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const CloseIcon = () =>
  <Example
    code="closeIcon"
    Component={Component}
    Source={Source}
    undent={6}
    expand
  >
    <p>
      The <code>closeIcon</code> property can be used to change the
      icon displayed to close the modal.
    </p>
  </Example>

export default CloseIcon