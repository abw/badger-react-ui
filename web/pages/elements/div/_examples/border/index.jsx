import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="border"
    Component={Component}
    Source={Source}
    highlightLines="2,5"
    expand
    undent={2}
  >
    <p>
      The <code>border</code> property can be used to add a border.  It
      can be specified as a boolean flag or an integer for the border width
      in pixels.
    </p>
  </Example>

export default DivExample
