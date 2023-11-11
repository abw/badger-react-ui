import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Button = () =>
  <>
    <p>
      The <code>Button</code> component can be used to render a button.
      Any child elements will be included as content.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Button