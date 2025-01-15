import React from 'react'
import { DataTable } from '@/src/index'
import animals from '../../animals.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns={{
      id: true,
      name: {
        filterable: false,
        display: ({ row }) =>
          `${row.name} ${row.animal}`
      }
    }}
  />
  /* END */

export default DataTableExample