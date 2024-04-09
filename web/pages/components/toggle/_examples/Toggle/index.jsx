import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { ButtonsLink } from '@/web/site/Links.jsx'

const Toggle = () =>
  <>
    <p className="large">
      The <code>Toggle</code> component renders a switchable toggle
      using the <ButtonsLink/> component.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Toggle