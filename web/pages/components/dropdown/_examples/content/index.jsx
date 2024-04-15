import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Content = () =>
  <Example
    code="content"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>content</code> property can be used to define the content
      as a short-cut.  Otherwise any child content of the{' '}
      <code>Dropdown</code> component will be displayed.
    </p>
  </Example>

export default Content