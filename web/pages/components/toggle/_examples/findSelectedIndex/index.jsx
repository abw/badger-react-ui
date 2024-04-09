import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FindSelectedIndex = () =>
  <Example
    code="findSelectedIndex"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>findSelectedIndex</code> property can be used to provide
      an alternative function to determine the index of a selected option.
      The default function looks for the option that matches the{' '}
      <code>value</code> property of the selected option.
    </p>
    <p>
      In this example we define a function to match the index of the selected
      option using the <code>id</code> property.
    </p>
  </Example>

export default FindSelectedIndex
