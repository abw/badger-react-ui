import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Size = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    undent={4}
  >
    <p>
      The <code>size</code> property can be used to set the size to one
      of the standard sizes.  This is also a short-cut for adding the
      size as a CSS class so you can use it to add any of your own size
      classes.
    </p>
  </Example>

export default Size