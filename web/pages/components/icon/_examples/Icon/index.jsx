import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Demo       from './Demo.jsx'

const Icon = () =>
  <>
    <p>
      The <code>Icon</code> component can be used to render SVG icons.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
    <h2>Demo</h2>
    <Demo/>
  </>

export default Icon