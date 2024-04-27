import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ClassName = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    highlightLines="10,13,17,21-24"
    undent={4}
    expand
  >
    <p>
      The <code>className</code> property can be used to add a CSS class
      to the column.  It can be a string or a function which will be passed
      an object containing the <code>row</code>, <code>column</code>,{' '}
      <code>value</code>, <code>name</code>, <code>rowIndex</code> and{' '}
      <code>cellIndex</code>.
    </p>
  </Example>

export default ClassName