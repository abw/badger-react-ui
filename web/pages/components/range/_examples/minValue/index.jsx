import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

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
    </p>
    <p>
      The default value is the <CodeHashLink id="min"/> value of the range, i.e.
      0%. This can be changed by setting the <code>minNormal</code> property.
      This is a normalised (0-1) value, defaulting to <code>0</code>, indicating
      the proportion of the range that the <code>minValue</code> should default to.
    </p>
    <p>
      If a specified <code>minValue</code> is outside of the range then it will be
      clamped to the nearest value.  If a
      (<a href="#step" className="code">step</a>) is defined then the value
      will be quantised to the closest step value.
    </p>
  </Example>

export default RangeExample