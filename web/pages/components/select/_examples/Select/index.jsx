import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Select = () =>
  <>
    <div className="cols-2 stack-desktop">
      <p>
        The <code>Select</code> component implements a custom select input.
      </p>
    </div>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Select