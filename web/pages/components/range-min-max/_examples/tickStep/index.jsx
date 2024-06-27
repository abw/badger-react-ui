import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="tickStep"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="3"
    expand
  >
    <p>
      The <code>tickStep</code> property allows you to set a step for the
      displayed ticks which is different to the main <CodeHashLink id="step"/> property
      which controls the granularity of the slider.
    </p>
  </Example>

export default RangeExample