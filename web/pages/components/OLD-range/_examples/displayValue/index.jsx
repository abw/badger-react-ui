import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="displayValue"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>displayValue</code> property can be defined as a function
      to format the value that is displayed by <a href="#showvalue" className="code">showValue</a>.
      It is passed the numeric value as an argument and should return the
      formatted text.
    </p>
  </Example>

export default RangeExample