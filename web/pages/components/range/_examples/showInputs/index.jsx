import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ShowInput = () =>
  <Example
    code="showInputs"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>showInputs</code> property (or <code>showInput</code> as an alias){' '}
      can be specified to display inputs below the slider to allow precise values
      to be entered.
    </p>
  </Example>

export default ShowInput