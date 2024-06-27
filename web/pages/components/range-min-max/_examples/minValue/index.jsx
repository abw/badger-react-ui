import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="minValue"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>minValue</code> property can be used to set the initial minimum
      value.
      The default range is from 0{' '}
      (<a href="#min" className="code">min</a>) to 100{' '}
      (<a href="#max" className="code">max</a>).  If a <code>minValue</code> is
      not specified then it will default to one quarter of the range.{' '}
    </p>
    <p>
      If a specified <code>minValue</code> is outside of the range then it will be
      clamped to the nearest value.  If a
      (<a href="#step" className="code">step</a>) is defined then the value
      will be quantised to the closest step value.
    </p>
  </Example>

export default RangeExample