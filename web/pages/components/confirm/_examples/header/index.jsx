import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Header = () =>
  <Example
    code="header"
    Component={Component}
    Source={Source}
    highlightLines="5-10"
    undent={2}
    expand
  >
    <p>
      The <code>header</code> property can be used to provide the header
      for a modal.
    </p>
  </Example>

export default Header