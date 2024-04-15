import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import HashLink   from '@/page/HashLink.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Options = () =>
  <Example
    code="options"
    Component={Component}
    Source={Source}
    highlightLines="19"
    expand
  >
    <p>
      The <code>options</code> property should be used to provide an array
      of options that the user can select from.  Each element in the array
      can be a string, numerical value or an object.
    </p>
    <p>
      When the <code>options</code> contains an array of objects, each object
      element should have an <code>id</code> or <code>value</code> property
      to uniquely identify it.  By default, options will be displayed using
      the <code>text</code>, <code>label</code> or <code>name</code> property.
      Alternately, you can define your own <HashLink text="displayOption"/> function
      to display an option in the selection list and/or a{' '}
      <HashLink text="displayValue"/> function to display the selected value.
    </p>
    <p>
      The <code>disabled</code>{' '} property can be used to mark an option
      as disabled, or you can define a <HashLink text="validOption"/> function
      to implement a different strategy to identify unselectable options.
    </p>
  </Example>

export default Options
