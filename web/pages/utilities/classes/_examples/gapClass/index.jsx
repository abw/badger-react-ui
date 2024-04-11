import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const GapClass = () =>
  <Example
    code="gapClass"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>gapClass</code> utility function can be used to construct
      a CSS class for adding gaps between element, e.g. when using flex or
      grid layout.  A single value can be provided and will be used for both
      vertical and horizontal gaps.  Or two values can be provided, either as
      an array or whitespace delimited string, giving different gaps in the
      vertical and horizontal directions.  The values are multiples of 0.25rem.
    </p>
  </Example>

export default GapClass
