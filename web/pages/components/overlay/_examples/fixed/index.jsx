import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Fixed = () =>
  <Example
    code="fixed"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={8}
  >
    <p>
      Add the <code>fixed</code> to set the overlay position to fixed so that
      it covers the entire viewport.
    </p>
  </Example>

export default Fixed