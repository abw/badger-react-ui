import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="maxValue"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>maxValue</code> property can be used to set the initial maximum
      value.
    </p>
    <p>
      The default value is the <CodeHashLink id="max"/> value of the range, i.e.
      100%. This can be changed by setting the <code>maxNormal</code> property.
      This is a normalised (0-1) value, defaulting to <code>1</code>, indicating
      the proportion of the range that the <code>maxValue</code> should default to.
    </p>
    <p>
      If a specified <code>maxValue</code> is outside of the range then it will be
      clamped to the nearest value.  If a
      (<a href="#step" className="code">step</a>) is defined then the value
      will be quantised to the closest step value.
    </p>
  </Example>

export default RangeExample