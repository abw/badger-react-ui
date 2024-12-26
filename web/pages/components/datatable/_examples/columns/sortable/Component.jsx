import React from 'react'
import { DataTable } from '@/src/index.jsx'
import animals from '../../animals.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns={{
      id: true,
      name: {
        sortable: false,
        display: ({ row }) =>
          `${row.name} ${row.animal}`
      }
    }}
  />
  /* END */

export default DataTableExample