import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const BgStrokeStop = () =>
  <Example
    code="bgStrokeStop"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>bgStrokeStop</code> property can be used to set the color
      stop for the stroke on the background icons.  The{' '}
      <code>bgStrokeStopDark</code> property can be used to set it in dark
      mode. It only has any effect when <HashLink text="bgIcon"/> is set.
    </p>
  </Example>

export default BgStrokeStop
