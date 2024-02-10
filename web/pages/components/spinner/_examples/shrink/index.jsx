import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const Shrink = () =>
  <Example
    code="shrink"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>shrink</code> property can be used to shrink the icon.
      The default value is 5 when a <HashLink text="bgIcon"/> is set,
      otherwise it is 0.
    </p>
  </Example>

export default Shrink
