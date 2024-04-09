import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { ButtonLink } from '@/web/site/Links.jsx'

const Options = () =>
  <Example
    code="options"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>options</code> property can be used to define the available
      options.  Each object in the array can contain any of the properties
      accepted by the <ButtonLink/> component, e.g. <code>text</code>,{' '}
      <code>icon</code>, <code>iconLeft</code>, <code>iconRight</code>, etc.
    </p>
    <p>
      When used as shown in this example (where the <code>selected</code> value
      is the option object), each option should have a <code>value</code> to
      uniquely identify it.
    </p>
  </Example>

export default Options
