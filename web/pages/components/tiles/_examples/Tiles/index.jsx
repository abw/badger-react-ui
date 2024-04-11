import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Tiles = () =>
  <>
    <p className="large">
      The <code>Tiles</code> component implements a grid layout for tiling
      the child components.
    </p>
    <Example
      Component={Component}
      code={Source}
      // expand
    />
  </>

export default Tiles