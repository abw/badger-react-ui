import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Footer = () =>
  <Example
    code="footer"
    Component={Component}
    Source={Source}
    undent={6}
    expand
  >
    <p>
      The <code>footer</code> property can be used to define some custom
      footer content.
    </p>
  </Example>

export default Footer