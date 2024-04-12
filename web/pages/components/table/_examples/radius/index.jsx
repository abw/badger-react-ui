import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Radius = () =>
  <Example
    code="radius"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>radius</code> property is a shortcut to set the border
      radius.  It can be <code>true</code> to set the default radius (1),{' '}
      <code>false</code> to remove the border radius, or an integer to set
      the border radius in multiples of 0.25rem, with the pre-defined values
      being 0, 1, 2, 3, 4, 5, 6, 8 and 10.
    </p>
  </Example>

export default Radius
