import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    color="brand"
    rows={animals}
    columns={{
      id:     { heading: 'Ref.',     type: 'number' },
      name:   { heading: 'Username', type: 'string' },
      animal: { },
      role:   { },
    }}
  />
  /* END */

export default DataTableExample
