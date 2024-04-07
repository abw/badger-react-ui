import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Reset = () =>
  <Example
    code="reset"
    Component={Component}
    Source={Source}
  >
    <p>
      You can call the <code>reset</code> method on the search object to
      reset the search.  Note that it will be reset to the original
      state, so if an initial value was provided to the component then
      that will be restored.  Use the <code>clear</code> method if you want
      to clear the input instead.
    </p>
    <p>
      Try changing the values in the search components below.  Clicking on
      the first reset button will reset the first component to a blank state.
      Clicking on the second reset button will reset the second component
      to its original state, containing the value &quot;Ben Badger&quot;.
    </p>
  </Example>

export default Reset
