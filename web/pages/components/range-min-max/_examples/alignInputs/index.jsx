import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="alignInputs"
    Component={Component}
    Source={Source}
    highlightLines="8,13,18"
    undent={4}
    expand
  >
    <p>
      The <code>alignInputs</code> property (or <code>alignInput</code> as an
      alias) can be set to specified to set the alignment of the inputs.
      The default value is <code>space</code> which will minium input at the
      left edge and the maximum input at the right.  It can also be set to{' '}
      <code>center</code>, <code>left</code> or <code>right</code>.
    </p>
    <p>
      This option only has an effect when <CodeHashLink id="showInputs"/> is set.
    </p>
  </Example>

export default RangeExample