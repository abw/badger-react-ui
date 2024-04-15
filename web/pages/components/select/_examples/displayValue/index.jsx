import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DisplayValue = () =>
  <Example
    code="displayValue"
    Component={Component}
    Source={Source}
    highlightLines="16-20,25"
    expand
  >
    <p>
      When an option is selected the same rules will be applied to display
      the option in the search input.  If it&apos;s not a string or an
      object containing one of the aforementioned properties then you should
      provide a <code>displayValue</code> function to convert the result to
      a text string that can be displayed.
    </p>
  </Example>

export default DisplayValue
