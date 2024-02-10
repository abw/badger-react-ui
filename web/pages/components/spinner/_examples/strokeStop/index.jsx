import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const StrokeStop = () =>
  <Example
    code="strokeStop"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>strokeStop</code> property can be used to set the color stop
      for the stroke, ranging from 0 (near black) to 100 (near white) in steps
      of 5.  The <code>strokeStopDark</code> property can be used to set the
      color stop for dark mode.
    </p>
  </Example>

export default StrokeStop
