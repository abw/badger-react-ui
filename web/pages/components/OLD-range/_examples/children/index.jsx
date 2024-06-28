import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="children"
    Component={Component}
    Source={Source}
    // undent={2}
    highlightLines="11-15,18-22,27"
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
      In this example we first render the <code>RangeOutput</code> and <code>RangeSlider</code>{' '}
      sub-components. Then we include several copies of the custom <code>SetButton</code> component
      which uses the <code>useRange</code> hook to access the <code>setValue</code> function.
    </p>
    <p>
      The final block of code demonstrates a function which receives the{' '}
      <code>setValue</code> function as a property which it can then call
      directly.
    </p>
  </Example>

export default RangeExample