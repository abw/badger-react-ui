import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Dropdown = () =>
  <>
    <p className="large">
      The <code>Dropdown</code> component can be used to display content
      that is visible when the user clicks on the trigger.
    </p>
    <p>
      The default behaviour is to open the dropdown when the user
      clicks on the trigger.
    </p>
    <Example
      Component={Component}
      code={Source}
      // expand
    />
  </>

export default Dropdown