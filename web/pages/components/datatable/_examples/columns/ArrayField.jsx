import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    color="brand"
    rows={animals}
    columns={[
      { field: 'id'     },
      { field: 'name'   },
      { field: 'animal' },
      { field: 'role'   },
    ]}
  />
  /* END */

export default DataTableExample
