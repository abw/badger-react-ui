import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const ShowLimits = () =>
  <Example
    code="showLimits"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="4,9-10"
    expand
  >
    <p>
      The <code>showLimits</code> property can be specified to display the
      minimum and maximum limits below the slider.  If a{' '}
      <CodeHashLink id="displayValue"/> function is defined then it will be
      used to generate the text for the limit values.
    </p>
  </Example>

export default ShowLimits