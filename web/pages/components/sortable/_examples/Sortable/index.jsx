import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Sortable = () =>
  <>
    <p className="large">
      The <code>Sortable</code> component is a wrapper around{' '}
      <a href="https://dndkit.com/">dnd kit</a> for creating sortable
      components.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Sortable