import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ButtonClass = () =>
  <Example
    code="buttonClass"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>buttonClass</code> property can be used to add a CSS class
      to each button. Badger CSS targets the <code>button</code> element for
      styling so you don&apos;t need to add any special classes to get the
      default styling.
    </p>
  </Example>

export default ButtonClass