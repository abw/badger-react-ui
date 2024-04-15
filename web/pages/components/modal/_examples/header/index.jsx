import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Header = () =>
  <Example
    code="header"
    Component={Component}
    Source={Source}
    highlightLines="5-12"
    undent={6}
    expand
  >
    <p>
      The <code>header</code> property can be used to define some custom
      header content.
    </p>
  </Example>

export default Header