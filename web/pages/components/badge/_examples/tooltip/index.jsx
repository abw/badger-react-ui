import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Tooltip = () =>
  <Example
    code="tooltip"
    Component={Component}
    Source={Source}
    highlightLines="3-4"
    undent={2}
    expand
  >
    <p>
      The <code>tooltip</code> property can be used to set the
      <code>data-tooltip</code> property on the badge.  This can
      be used to indicate the direction of the tooltip, e.g. <code>top</code>,{' '}
      <code>right</code>, <code>top right</code>, etc.
      The tooltip content should be defined using the <code>label</code> property.
    </p>
  </Example>

export default Tooltip