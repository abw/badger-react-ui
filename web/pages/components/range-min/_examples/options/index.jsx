import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { RangeLink } from '@/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="options"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>options</code> property can be used to define an array of
      discrete values.
    </p>
    <p>
      See the <RangeLink/> component for further details.
    </p>
  </Example>

export default RangeExample