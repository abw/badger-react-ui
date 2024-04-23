import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Content = () =>
  <Example
    code="content"
    Component={Component}
    Source={Source}
    highlightLines="8"
    expand
    undent={2}
  >
    <p>
      The <code>content</code> property can be used as a shortcut for adding
      simple content instead of child elements.
    </p>
  </Example>

export default Content
