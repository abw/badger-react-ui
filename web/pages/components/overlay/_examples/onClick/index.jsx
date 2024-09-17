import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Fixed = () =>
  <Example
    code="onClick"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={8}
  >
    <p>
      The <code>onClick</code> property can be used to add a handler which
      is called when the user clicks on the overlay.  This can be used to
      hide to overlay, for example.
    </p>
  </Example>

export default Fixed