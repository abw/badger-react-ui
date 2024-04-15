import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OverlayState = () =>
  <Example
    code="OverlayState"
    Component={Component}
    Source={Source}
    highlightLines="5"
    expand
  >
    <p>
      The <code>OverlayState</code> function can be used to generate
      an Overlay with state.  It returns the <code>isVisible</code> property,{' '}
      <code>show</code> and <code>hide</code> functions to change the visibility,
      and an <code>Overlay</code> component.
    </p>
  </Example>

export default OverlayState