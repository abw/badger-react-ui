import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Headline = () =>
  <Example
    code="headline"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>headline</code> property can be used to set a headline.
    </p>
  </Example>

export default Headline