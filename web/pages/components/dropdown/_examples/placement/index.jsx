import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Placement = () =>
  <Example
    code="placement"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>placement</code> property can used to change the placement
      of the dropdown window.  The window is positioned using <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a>.
      See <a href="https://floating-ui.com/docs/useFloating#placement" target="_blank" rel="noreferrer">their documentation</a>{' '}
      for information about the acceptable values.
    </p>
  </Example>

export default Placement