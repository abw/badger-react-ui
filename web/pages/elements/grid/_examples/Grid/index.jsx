import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Grid = () =>
  <>
    <p className="large">
      The <code>Grid</code> component is a shortcut for adding grid classes.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Grid