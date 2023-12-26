import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Datatable = () =>
  <>
    <p className="large">
      The <code>Datatable</code> component can be used to display, sort, filter
      and page sets of data.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Datatable