import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Options = () =>
  <Example
    code="options"
    Component={Component}
    Source={Source}
    highlightLines="4-8"
    undent={4}
    expand
  >
    <p>
      The <code>options</code> property should be used to define the values
      for each radio button.  These can be simple values (e.g. strings or
      numbers) as shown in the preceding examples.  For more complex cases
      you should define each element as an object containing a{' '}
      <code>value</code> and any of <code>text</code>, <code>label</code> or{' '}
      <code>name</code> for the displayed text.
    </p>
  </Example>

export default Options