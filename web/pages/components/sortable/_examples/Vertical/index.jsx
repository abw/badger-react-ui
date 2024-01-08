import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Vertical = () =>
  <>
    <p className="large">
      The <code>VerticalSort</code> component works exactly the same but
      constricts the items to be sorted vertically.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Vertical