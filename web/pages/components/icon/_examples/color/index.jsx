import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Color = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>color</code> property is a short-cut to set the color.  This
      adds the color to the CSS class.
    </p>
    <p>
      The <code>color</code> can be be comprised of up to 5 elements separated
      by hyphens.  The first is the color range, e.g. <code>red</code>,{' '}
      <code>green</code>, <code>blue</code>, etc.  The second is the stop
      number for the foreground.  This is an integer from 0 (darkest) to 100
      (lightest) in steps of 5.  The third is the stop number for the
      background.  The remaining two numbers are stops for the foreground and
      background colors in dark mode.
    </p>
  </Example>

export default Color