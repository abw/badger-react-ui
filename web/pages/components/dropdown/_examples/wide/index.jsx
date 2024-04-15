import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Wide = () =>
  <Example
    code="wide"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>wide</code> property can added to make the menu expand to
      the full width of the container.
    </p>
  </Example>

export default Wide