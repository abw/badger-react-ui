import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnSelect = () =>
  <Example
    code="onSelect"
    Component={Component}
    Source={Source}
    highlightLines="20"
    expand
  >
    <p>
      The <code>onSelect</code> property should be used to provider a handler
      which will be called when an option is selected.  It is passed two
      arguments: the <code>option</code> object and the numerical index of
      the option in the <code>options</code> array.
    </p>
    <p>
      You can safely use the second argument, the numerical index, as the
      value to store for the <code>selected</code> option.  You can use
      the first argument, the option object as long as each option has a{' '}
      <code>value</code> property to uniquely identify it.
    </p>
  </Example>

export default OnSelect
