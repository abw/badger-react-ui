import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const WideSummary = () =>
  <Example
    code="wideSummary"
    Component={Component}
    Source={Source}
    highlightLines="6"
    undent={2}
    expand
  >
    <p>
      The <code>wideSummary</code> property can be set to make the summary
      text expand to the full width of the container.  It&apos;t useful if
      you want the <code>iconRight</code> to be way over on the right.
    </p>
  </Example>

export default WideSummary