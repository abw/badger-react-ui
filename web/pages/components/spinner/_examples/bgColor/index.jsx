import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const BgColor = () =>
  <Example
    code="bgColor"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>bgColor</code> property can be used to set the color of
      the background icon.  It only has any effect when{' '}
      <HashLink text="bgIcon"/> is set.
    </p>
  </Example>

export default BgColor
