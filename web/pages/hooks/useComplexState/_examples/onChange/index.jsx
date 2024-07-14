import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnChange = () =>
  <Example
    code="onChange"
    Component={Component}
    Source={Source}
    undent="2"
    highlightLines="4-7"
  >
    <p>
      The <code>useComplexState()</code> function can be passed a second
      argument with additional configuration options.  These can include
      an <code>onChange</code> handler which will be called any time a
      state variable is modified.  It will be passed a copy of the modified
      state.  It can make any further changes to the state before returning
      it.
    </p>
    <p>
      In this example we provide an <code>onChange</code> handler to
      calculate the total number of animals.  Note that the handler will
      be called when the state is initially defined.  This ensures that
      the <code>total</code> state value is always defined, even before
      we click on any buttons to change a number.
    </p>
  </Example>

export default OnChange
