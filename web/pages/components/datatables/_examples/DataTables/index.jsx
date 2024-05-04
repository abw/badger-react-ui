import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { DataTableLink } from '@/web/site/Links.jsx'

const DataTables = () =>
  <>
    <p className="large">
      The <code>DataTables</code> (note the extra &quot;s&quot; on the end)
      component is a wrapper around the <DataTableLink/> component.
    </p>
    <p>
      Instead of showing each page of data in a single table it shows each
      row in a separate table.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default DataTables