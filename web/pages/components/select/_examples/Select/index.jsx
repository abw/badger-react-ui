import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Select = () =>
  <>
    <p className="large">
      The <code>Select</code> component implements a custom select input.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Select