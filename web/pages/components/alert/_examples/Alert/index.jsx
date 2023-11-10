import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import AlertDemo from './Demo.jsx'

const Alert = () =>
  <>
    <p>
      Use the <code>Alert</code> component to render an alert.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
    <h2>Demo</h2>
    <AlertDemo/>
  </>

export default Alert