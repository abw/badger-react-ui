import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Color = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    highlightLines="4,12"
    undent={4}
    expand
  >
    <p>
      The <code>color</code> property can be used to set the color range.
      It is most commonly used in conjunction with the <code>border</code>,{' '}
      <code>lined</code> and <code>shaded</code> properties.
    </p>
  </Example>

export default Color