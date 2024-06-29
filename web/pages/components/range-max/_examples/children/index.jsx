import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    title="Custom Layout"
    Component={Component}
    Source={Source}
    highlightLines="10-11,13-17,19-35,40"
    // expand
  >
    <p>
      You can define your own layout for the component using a combination
      of the built-in components and your own code.
    </p>
    <p>
      Inside the scope of the <code>RangeMax</code> element, any children can
      access the context using the <code>useRange</code> hook.  Immediate
      children of the <code>RangeMax</code> component can also be functions
      which will receive an object containing all the context properties as
      an argument.
    </p>
    <p>
      In this example we first render the <code>RangeOutput</code> and{' '}
      <code>RangeSlider</code>{' '} sub-components (lines 10 and 11).
      Then we include several copies of the custom <code>SetMax</code> component (lines 13-17)
      which uses the <code>useRange</code> hook to access the{' '}
      <code>setMaxValue</code> function (line 39).
    </p>
    <p>
      The final block of code (lines 19 to 35) demonstrates a function which receives the{' '}
      <code>setMaxValue</code> function as a property which it can then call
      directly.
    </p>
  </Example>

export default RangeExample