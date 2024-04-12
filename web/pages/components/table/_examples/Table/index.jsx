import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Table = () =>
  <>
    <p className="large">
      The <code>Table</code> component simplifies the process of generating
      tables.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Table