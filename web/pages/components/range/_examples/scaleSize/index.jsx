import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="scaleSize"
    Component={Component}
    Source={Source}
    highlightLines="3,7,11,15,19,23,27"
    undent={2}
    expand
  >
    <p>
      The <code>scaleSize</code> property
      can be specified to set the size for the scale values displayed when
      <CodeHashLink id="showScale"/> or <CodeHashLink id="showLimits"/> is set.
      It can be set to any of the standard sizes: <code>smallest</code>,{' '}
      <code>smaller</code>, <code>small</code>, <code>medium</code>,{' '}
      <code>large</code>, <code>larger</code> or <code>largest</code>.
      The default value is <code>smaller</code>.
    </p>
  </Example>

export default RangeExample