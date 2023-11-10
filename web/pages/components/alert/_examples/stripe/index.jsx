import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Stripe = () =>
  <Example
    code="stripe"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>stripe</code> property can be set as a short-cut to add the{' '}
      <code>stripe</code> CSS class for a more minimal look.
    </p>
  </Example>

export default Stripe