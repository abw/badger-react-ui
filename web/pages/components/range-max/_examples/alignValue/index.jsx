import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="alignValue"
    Component={Component}
    Source={Source}
    highlightLines="8,13,18"
    undent={4}
    expand
  >
    <p>
      The <code>alignValue</code> property can be set to specify the
      alignment of the current value.  The default value is <code>thumb</code> which
      will align the value with the draggable &quot;thumb&quot;.  It can
      also be set to <code>left</code>, <code>center</code> or <code>right</code>.
    </p>
    <p>
      This option only has an effect when <a href="#showvalue" className="code">showValue</a> is set.
    </p>
  </Example>

export default RangeExample