import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ModalState = () =>
  <Example
    code="ModalState"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>ModalState</code> function can be used to generate
      a Modal with state.  It returns the <code>isVisible</code> property,{' '}
      <code>show</code> and <code>hide</code> functions to change the visibility,
      and a <code>Modal</code> component.
    </p>
  </Example>

export default ModalState