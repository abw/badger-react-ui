import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnSelect = () =>
  <Example
    code="onSelect"
    Component={Component}
    Source={Source}
  >
    <p>
      You can define an <code>onSelect</code> function which will be
      called when an option is selected.
    </p>
  </Example>

export default OnSelect
