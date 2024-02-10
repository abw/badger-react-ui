import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Spinner = () =>
  <>
    <p className="large">
      The <code>Spinner</code> component renders a spinning icon indicating
      that something is happening.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Spinner