import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Details = () =>
  <>
    <p className="large">
      The <code>Details</code> component displays a summary with
      revealable content.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Details