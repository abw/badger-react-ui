import React        from 'react'
import Strings      from './Strings.jsx'
import StringsSrc   from './Strings.jsx?raw'
import Values       from './Values.jsx'
import ValuesSrc    from './Values.jsx?raw'
import Section      from '@/page/Section.jsx'
import Example      from '@/site/Example.jsx'

const ValuesExamples = () =>
  <Section code="values">
    <p>
      The <code>values</code> property can be used to pre-select one or more
      values.
    </p>
    <Example
      Component={Strings}
      code={StringsSrc}
      caption="values"
      highlightLines="7"
      expand={false}
    />
    <p>
      When the <code>options</code> are defined as an array of objects,
      the elements in the <code>values</code> should correspond to the{' '}
      <code>value</code> or <code>id</code> property of elements in
      the <code>options</code> array.  Or they can be defined as objects
      that contains a matching <code>value</code> or <code>id</code>.
    </p>
    <Example
      Component={Values}
      code={ValuesSrc}
      caption="values"
      highlightLines="7"
      expand={false}
    />
  </Section>

export default ValuesExamples
