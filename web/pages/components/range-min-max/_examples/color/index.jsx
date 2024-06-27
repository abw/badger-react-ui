import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    undent={4}
    // highlightLines="2"
    expand
  >
    <p>
      The <code>color</code> property can be used to set the color to any of
      the color ranges in your palette.  The default value is <code>brand</code>,
      selecting your brand color.
    </p>
  </Example>

export default RangeExample