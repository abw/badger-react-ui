import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const HeadIcon = () =>
  <Example
    code="headicon"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>headIcon</code> property can be used to add an icon to the
      headline.
    </p>
  </Example>

export default HeadIcon