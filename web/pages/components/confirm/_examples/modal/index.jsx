import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Modal = () =>
  <Example
    code="modal"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>modal</code> property can be set to make the confirmation
      happen in a modal.
    </p>
    <p>
      The <code>prompt</code> property can be used to provide an additional
      prompt to the user.  The <code>title</code> property can be used to
      provide a title, or <code>heading</code> can be used to provide the
      entire header block.  The <code>modalClass</code> property can be used
      to define a CSS class for the modal.
    </p>
    <p>
      If a <code>prompt</code> is defined then the buttons will be rendered
      in the modal footer.  Otherwise they will be in the main modal body.
    </p>
  </Example>

export default Modal