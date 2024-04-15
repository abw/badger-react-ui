import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const NextIcon = () =>
  <Example
    code="nextIcon"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={4}
  >
    <p>
      The <code>nextIcon</code> property can be used to set the icon for
      the next page button.
    </p>
  </Example>

export default NextIcon