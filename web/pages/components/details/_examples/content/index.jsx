import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Content = () =>
  <Example
    code="content"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>content</code> property can be used as a short-cut to set
      the body content for simple cases.
    </p>
  </Example>

export default Content