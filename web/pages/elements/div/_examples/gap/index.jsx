import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="gap"
    Component={Component}
    Source={Source}
    highlightLines="2,5"
    expand
    undent={2}
  >
    <p>
      The <code>gap</code> property can be used to add gaps between elements
      for grid and flex layouts.  It can be specified as a single number which
      is used for both vertical and horizontal gaps (in units of 0.25rem), or
      as two separate numbers. The default value when used as a boolean flag is 1.
    </p>
  </Example>

export default DivExample
