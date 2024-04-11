import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Gap = () =>
  <Example
    code="gap"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>gap</code> property can be used to define the gap between
      tiles in units of 0.25rem.  A single value provides the vertical and
      horizontal gap.
    </p>
    <p>
      Two values can be provided, either as an array or a whitespace delimited
      string, providing different values for the vertical and horizontal gaps.
    </p>
  </Example>

export default Gap
