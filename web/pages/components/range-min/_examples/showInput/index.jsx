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
      The <code>showInput</code> property (or <code>showInputs</code> as an alias){' '}
      can be specified to display an input below the slider to allow precise values
      to be entered.
    </p>
  </Example>

export default ShowInput