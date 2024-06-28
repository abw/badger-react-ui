import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="alignInput"
    Component={Component}
    Source={Source}
    highlightLines="8,13,18"
    undent={4}
    expand
  >
    <p>
      The <code>alignInput</code> property (or <code>alignInputs</code> as an
      alias) can be set to specified to set the alignment of the input.
      The default value is <code>center</code> which will align the input to the
      center.  It can also be set to <code>left</code> or <code>right</code>.
    </p>
    <p>
      This option only has an effect when <CodeHashLink id="showInput"/> is set.
    </p>
  </Example>

export default RangeExample