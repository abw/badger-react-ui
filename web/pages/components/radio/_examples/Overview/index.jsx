import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Radio = () =>
  <>
    <p className="large">
      The <code>Radio</code> component renders a set of radio buttons.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Radio