import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Modal = () =>
  <Example
    code="modal"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>modal</code> property can be set to make the confirmation
      happen in a modal.
    </p>
  </Example>

export default Modal