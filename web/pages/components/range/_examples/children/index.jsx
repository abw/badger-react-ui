import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    title="Custom Layout"
    Component={Component}
    Source={Source}
    // undent={2}
    highlightLines="10-11,14-16,19-21,24-44,48,58"
    expand
  >
    <p>
      You can define your own layout for the component using a combination
      of the built-in components and your own code.
    </p>
    <p>
      Inside the scope of the <code>Range</code> element, any children can
      access the context using the <code>useRange</code> hook.  Immediate
      children of the <code>Range</code> component can also be functions
      which will receive an object containing all the context properties as
      an argument.
    </p>
    <p>
      In this example we first render the <code>RangeOutput</code> and{' '}
      <code>RangeSlider</code>{' '} sub-components (lines 10 and 11).
      Then we include several copies of the custom <code>SetMin</code> (lines 14-16)
      and <code>SetMax</code> (lines 19-21) components
      which use the <code>useRange</code> hook to access the{' '}
      <code>setMinValue</code> and <code>setMaxValue</code> functions respectively
      (lines 48 and 58).
    </p>
    <p>
      The final block of code (lines 24 to 44) demonstrates a function which receives the{' '}
      <code>setValues</code> function as a property which it can then call
      directly.
    </p>
  </Example>

export default RangeExample