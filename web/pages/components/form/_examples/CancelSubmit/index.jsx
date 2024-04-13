import React       from 'react'
import Example     from '@/site/Example.jsx'
import Classes     from './Classes.jsx'
import ClassesSrc  from './Classes.jsx?raw'
import Section     from '@/page/Section.jsx'

const CancelSubmit = () =>
  <Section code="CancelSubmit">
    <p>
      The <code>CancelSubmit</code> component is a wrapper around the
      equivalent component from Badger Form.  It allows you to define icons
      for buttons.
    </p>
    <Example
      Component={Classes}
      code={ClassesSrc}
    />
  </Section>

export default CancelSubmit



