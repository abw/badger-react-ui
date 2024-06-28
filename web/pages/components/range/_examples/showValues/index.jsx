import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="showValues"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>showValues</code> property (or <code>showValue</code> as an alias)
      can be specified to display the current values above their respective slider thumbs.
      The <CodeHashLink id="displayValue"/> property can be set to define a
      function to format the value.
    </p>
  </Example>

export default RangeExample