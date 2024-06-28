import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ShowInput = () =>
  <Example
    code="showInput"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>showInput</code> property can be specified to display an
      input below the slider to allow a precise value to be entered.
    </p>
  </Example>

export default ShowInput