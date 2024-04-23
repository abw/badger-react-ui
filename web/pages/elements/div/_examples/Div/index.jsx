import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeLink } from '@/web/site/Links.jsx'

const Div = () =>
  <>
    <p className="large">
      The <code>Div</code> component is a utility for creating a{' '}
      <code>div</code> element.  It uses the{' '}
      <CodeLink to="/utilities/classes" text="CSS utility classes"/> to
      construct a CSS class from the properties passed to it.
    </p>
    <p>
      The properties listed below have some additional processing applied
      to them.  All other properties are added to the generated CSS class.
      For example, you can add the <code>inverse</code>  and <code>blue</code>{' '}
      properties and the generated CSS class will be <code>inverse blue</code>.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Div