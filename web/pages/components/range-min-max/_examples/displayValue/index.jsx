import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="displayValue"
    Component={Component}
    Source={Source}
    highlightLines="5"
    undent={2}
    expand
  >
    <p>
      The <code>displayValue</code> property can be defined as a function
      to format the values that are displayed by{' '}
      <CodeHashLink id="showValues"/>, <CodeHashLink id="showScale"/> and{' '}
      <CodeHashLink id="showLimits"/>.
      It is passed the numeric value as an argument and should return the
      formatted text.
    </p>
  </Example>

export default RangeExample