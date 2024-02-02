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
    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        The <code>value</code> property can be used to pre-select a value.
      </p>
    </div>
    <Example
      Component={Strings}
      code={StringsSrc}
      caption="value"
      expand={false}
    />
    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        When the <code>options</code> are defined as an array of object,
        the specified <code>value</code> should correspond to the{' '}
        <code>value</code> or <code>id</code> property of an element in
        the <code>options</code> array.
      </p>
    </div>
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


