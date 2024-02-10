import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const BgFillStop = () =>
  <Example
    code="bgFillStop"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>bgFillStop</code> property can be used to set color stop for
      the background icon fill.  The <code>bgFillStopDark</code> property can
      be used to set it for dark mode.
      It only has any effect when <HashLink text="bgIcon"/> is set.
    </p>
  </Example>

export default BgFillStop
