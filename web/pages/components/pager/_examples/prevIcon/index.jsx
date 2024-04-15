import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const PrevIcon = () =>
  <Example
    code="prevIcon"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={4}
  >
    <p>
      The <code>prevIcon</code> property can be used to set the icon for
      the previous page button.
    </p>
  </Example>

export default PrevIcon