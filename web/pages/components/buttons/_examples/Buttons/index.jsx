import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Buttons = () =>
  <>
    <p>
      The <code>Buttons</code> component can be used to render a connected
      set of buttons.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Buttons