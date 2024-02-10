import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Size = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>size</code> property can be set to change the size.  This
      can be one of the semantic sizes: <code>smallest</code>,{' '}
      <code>smaller</code>, <code>small</code>, <code>medium</code> (default){' '}
      <code>large</code>, <code>larger</code> or <code>largest</code>, or one
      of the size multipliers from <code>x2</code> up to <code>x10</code>.
    </p>
    <p>
      This is simply a shortcut to add the specified <code>size</code> as a
      CSS class to the icon.
    </p>
  </Example>

export default Size
