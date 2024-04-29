import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Type = () =>
  <Example
    code="id"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="8"
    expand
  >
    <p>
      The <code>type</code> can be set to <code>id</code> for numerical
      identifiers that should be sorted numerically but displayed as text
      strings, i.e. without commas separating thousands (or whatever your
      locale-specific convention is for formatting numbers).
    </p>
  </Example>

export default Type