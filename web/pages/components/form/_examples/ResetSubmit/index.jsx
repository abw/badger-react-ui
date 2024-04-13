import React       from 'react'
import Example     from '@/site/Example.jsx'
import Classes     from './Classes.jsx'
import ClassesSrc  from './Classes.jsx?raw'
import Section     from '@/page/Section.jsx'

const ResetSubmit = () =>
  <Section code="ResetSubmit">
    <p>
      The <code>ResetSubmit</code> component is a another wrapper around the
      equivalent component from Badger Form.  It also allows you to define icons
      for buttons.
    </p>
    <Example
      Component={Classes}
      code={ClassesSrc}
    />
  </Section>

export default ResetSubmit



