import React      from 'react'
// import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Display    from './DisplayValue.jsx'
import DisplaySrc from './DisplayValue.jsx?raw'
import Inputs     from './ShowInputs.jsx'
import InputsSrc  from './ShowInputs.jsx?raw'
// import Change     from './OnChange.jsx'
// import ChangeSrc  from './OnChange.jsx?raw'
import Section    from '@/page/Section.jsx'
import Example    from '@/site/Example.jsx'
// import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Section code="options">
    <p>
      The <code>options</code> property can be used to define an array of
      discrete values for the range.  The minimum and maximum values will
      be defined in terms of an index into the <code>options</code> array.
      The default value for <code>minValue</code> will be 0 and the default
      for <code>maxValue</code> will be one less than the length of the{' '}
      <code>options</code> array.
    </p>
    <Example
      Component={Component}
      code={Source}
      caption="options"
      undent={2}
      highlightLines="2-7"
      expand
    />
    <p>
      When <code>options</code> are defined, a default <code>displayValue</code>{' '}
      function will be provided which outputs the corresponding element from
      the <code>options</code> array.  This is apparent in the example above.
      Instead of outputting the values <code>0</code> and <code>25</code> for
      the minimum and maximum ends of the range, it outputs <code>A</code> and{' '}
      <code>Z</code>, which are the elements in the <code>options</code> array
      at position 0 and 25 respectively.
    </p>
    <p>
      You can define your own <code>displayValue</code> function.  It will be
      passed the <code>value</code> (the index into the<code>options</code>{' '}
      array) and the <code>options</code> array as arguments.
    </p>
    <Example
      Component={Display}
      code={DisplaySrc}
      caption="displayValue"
      undent={2}
      highlightLines="5-7"
      expand
    />
    <p>
      When <code>showInputs</code> is set, the inputs will be displayed as
      pull-down select components.  The <code>selectOptions</code> property
      can be used to pass additional properties to them. You can always define
      your own <code>Input</code> component if you want to implement something
      different.
    </p>
    <Example
      Component={Inputs}
      code={InputsSrc}
      caption="showInputs"
      undent={2}
      highlightLines="9-12"
      expand
    />
    {/*
      // Ah... this is a bit more complicated.  We can't just pass the
      // values elements back to the onChange handler because that may be
      // setting the minValue and maxValue, which must remain as indices.
    <p>
      The <code>onChange</code> function will be passed...
    </p>
    <Example
      Component={Change}
      code={ChangeSrc}
      caption="onChange"
      // undent={2}
      highlightLines="9-11"
      expand
    />
    */}
  </Section>

export default RangeExample