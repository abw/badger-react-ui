import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Button = () =>
  <>
    <p className="large">
      The <code>Button</code> component can be used to render a button.
      Any child elements will be included as content.
    </p>
    <p>
      There are numerous properties listed below that are typically used as
      shortcuts to set particular CSS styles.  Any other properties not listed
      here are forwarded to the <code>button</code> component.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Button