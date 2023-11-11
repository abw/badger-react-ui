import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Modal = () =>
  <>
    <p>
      The <code>Modal</code> component can be used to create an overlaid
      modal dialog.  The <code>open</code> property should be used to
      indicate if the modal is open or not. Any child elements will be
      rendered inside the modal body.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Modal