import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Striped = () =>
  <Example
    code="striped"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>striped</code> property is a shortcut to add the{' '}
      <code>striped</code> CSS class which adds striped background colors
      to each cell.
    </p>
  </Example>

export default Striped
