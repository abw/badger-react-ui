import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Overlay = () =>
  <>
    <p className="large">
      The <code>Overlay</code> component can be used to create an overlay.
      The default positioning is absolute so it will fill to cover the
      nearest parent that has positioning set to relative.
    </p>
    <Example
      Component={Component}
      code={Source}
      // expand
    />
  </>

export default Overlay