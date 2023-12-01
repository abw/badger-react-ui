import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Demo       from './Demo.jsx'

const Alert = () =>
  <>
    <p className="large">
      Use the <code>Alert</code> component to render an alert.
      Any child elements will be rendered inside the alert body.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />

    <h2>Demo</h2>
    <Demo/>
  </>

export default Alert