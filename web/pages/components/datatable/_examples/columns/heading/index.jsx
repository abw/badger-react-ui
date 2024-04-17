import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Heading = () =>
  <Example
    code="heading"
    Component={Component}
    Source={Source}
    highlightLines="4-5"
    undent={4}
    expand
  >
    <p>
      The <code>heading</code> property can be used to define the text that
      appears in the column heading.  If unspecified it defaults to a capitalised
      version of the column name.  For backwards compatibility, the{' '}
      <code>label</code> property is supported as an alias.
    </p>
  </Example>

export default Heading