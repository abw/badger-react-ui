import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ModalClass = () =>
  <Example
    code="modalClass"
    Component={Component}
    Source={Source}
    highlightLines="5"
    undent={2}
    expand
  >
    <p>
      The <code>modalClass</code> property can be used
      to define a CSS class for the modal.
    </p>
  </Example>

export default ModalClass