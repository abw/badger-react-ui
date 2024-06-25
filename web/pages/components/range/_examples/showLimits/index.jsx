import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ShowLimits = () =>
  <Example
    code="showLimits"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>showLimits</code> property can be specified to display the
      minimum and maximum limits below the slider.
    </p>
  </Example>

export default ShowLimits