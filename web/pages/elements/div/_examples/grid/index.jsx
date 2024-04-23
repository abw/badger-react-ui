import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="grid"
    Component={Component}
    Source={Source}
    highlightLines="1,2,6"
    expand
    undent={2}
  >
    <p>
      The <code>grid</code> property can be used to enable grid layout.  The
      property can be a number indicating the number of colums,  <code>fit</code>{' '}
      to add the <code>grid-fit</code> class, or <code>fill</code> to add the
      <code>grid-fill</code> class.  When specified as a boolean flag it defaults
      to <code>grid-1</code> for a single column.
    </p>
  </Example>

export default DivExample
