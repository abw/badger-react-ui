import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Tag = () =>
  <Example
    code="tag"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>tag</code> property can be used to add the <code>tag</code> CSS
      class to change the appearance of the badge.
    </p>
  </Example>

export default Tag