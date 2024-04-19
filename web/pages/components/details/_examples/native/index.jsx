import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Native = () =>
  <Example
    code="native"
    Component={Component}
    Source={Source}
    highlightLines="4,12"
    undent={4}
    expand
  >
    <p>
      Earlier versions (before 1.0.11) used the native <code>details</code>{' '}
      and <code>summary</code> HTML elements.  However there appear to be some
      problems with content inside the body overflowing when the <code>width</code>{' '}
      is set to <code>100%</code>, as shown in the second example below.  So
      more recent versions use <code>div.details</code> and <code>div.summary</code>{' '}
      as the elements.  These are styled the same but avoid the content width
      problems.
    </p>
    <p>
      You can set the <code>native</code> property if you want to use the{' '}
      native <code>details</code> and <code>summary</code> HTML elements.
    </p>
  </Example>

export default Native