import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../../data.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns={{
      id: { },
      name: {
        display: ({ row }) =>
          `${row.name} ${row.animal}`
      }
    }}
  />
  /* END */

export default DataTableExample