import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Title = () =>
  <Example
    code="title"
    Component={Component}
    Source={Source}
    undent={6}
    expand
  >
    <p>
      The <code>title</code> property can be used to add a title.
    </p>
  </Example>

export default Title