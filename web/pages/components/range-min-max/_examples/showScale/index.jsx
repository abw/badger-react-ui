import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="showScale"
    Component={Component}
    Source={Source}
    undent={4}
    highlightLines="4"
    expand
  >
    <p>
      The <code>showScale</code> property can be specified to display a scale
      of values below the ticks.  The <CodeHashLink id="showTicks"/> property
      must be set.  If a <CodeHashLink id="displayValue"/> function is defined
      then it will be used to generate the text for the scale values.
    </p>
  </Example>

export default RangeExample