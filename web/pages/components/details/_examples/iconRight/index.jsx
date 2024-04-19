import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconRight = () =>
  <Example
    code="iconRight"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>iconRight</code> property can be used to add an icon to the
      right of the summary text.  This will be added in addition to the default
      icon on the left.  If you don&apos;t want an icon on the left then set{' '}
      <code>iconLeft</code> to false or any other falsy value.
    </p>
  </Example>

export default IconRight