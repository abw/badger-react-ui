import React      from 'react'
// import Example    from '@/page/ExampleSection.jsx'
import Strings      from './Strings.jsx'
import StringsSrc   from './Strings.jsx?raw'
import Value        from './Value.jsx'
import ValueSrc     from './Value.jsx?raw'
import Section        from '@/page/Section.jsx'
import Example        from '@/site/Example.jsx'

const ValueExamples = () =>
  <Section code="value">
    <p>
      The <code>value</code> property can be used to pre-select a value.
    </p>
    <Example
      Component={Strings}
      code={StringsSrc}
      caption="value"
      expand={false}
    />
    <p>
      When the <code>options</code> are defined as an array of objects,
      the specified <code>value</code> should correspond to the{' '}
      <code>value</code> or <code>id</code> property of an element in
      the <code>options</code> array.
    </p>
    <Example
      Component={Value}
      code={ValueSrc}
      caption="value"
      expand={false}
    />
  </Section>

export default ValueExamples

/*
const Value = () =>
  <Example
    code="value"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>value</code> property can be used to pre-select a value.
    </p>
  </Example>

export default Value
*/


