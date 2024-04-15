import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Title = () =>
  <Example
    code="title"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>title</code> property can be used to provide a title for a
      modal.
    </p>
  </Example>

export default Title