import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Fill = () =>
  <Example
    code="fillStop"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>fillStop</code> property can be used to set the color stop
      for the fill, ranging from 0 (near black) to 100 (near white) in steps
      of 5.  The <code>fillStopDark</code> property can be used to set a
      different color stop for dark mode.
    </p>
  </Example>

export default Fill
