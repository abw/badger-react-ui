import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const BgFill = () =>
  <Example
    code="bgFill"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>bgFill</code> property is used to fill the background icon.
      It is set true by default but can be explicitly set to false to
      disable the fill.
      It only has any effect when <HashLink text="bgIcon"/> is set.
    </p>
  </Example>

export default BgFill
