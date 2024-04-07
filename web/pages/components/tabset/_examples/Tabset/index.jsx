import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'


const Tabset = () =>
  <>
    <p className="large">
      The <code>Tabset</code> component renders a selectable set of tabs.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Tabset