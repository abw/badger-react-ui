import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="inputSize"
    Component={Component}
    Source={Source}
    highlightLines="8,13,18"
    undent={4}
    expand
  >
    <p>
      The <code>inputSize</code> property (or <code>inputsSize</code> as an
      alias) can be set to specified to set the size of the input.
      It can be set to any of the standard sizes: <code>smallest</code>,{' '}
      <code>smaller</code>, <code>small</code>, <code>large</code>, {' '}
      <code>larger</code> or <code>largest</code>.
    </p>
    <p>
      This option only has an effect when <CodeHashLink id="showInput"/> is set.
    </p>
  </Example>

export default RangeExample