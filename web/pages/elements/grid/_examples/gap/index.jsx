import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const GridExample = () =>
  <Example
    code="gap"
    Component={Component}
    Source={Source}
    highlightLines="1,5"
    expand
    undent={4}
  >
    <p>
      The <code>gap</code> property allows you to specify the gap between
      element in multiples of the base unit, 0.25rem.  A single number is
      used for both vertical and horizontal gaps.  Two numbers can be
      specified for vertical and horizontal gaps, respectively.  You can
      specify 0 or <code>none</code> for either value to remove any gap in
      that dimension.
    </p>
  </Example>

export default GridExample
