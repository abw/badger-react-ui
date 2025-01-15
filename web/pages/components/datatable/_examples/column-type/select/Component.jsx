import React from 'react'
import animals from '../../animals.js'
import { DataTable } from '@/src/index'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns={{
      id: {
        type: 'id',
      },
      role: {
        type: 'select',
        selectOptions: [
          'admin', 'user', 'guest', 'superstar'
        ]
      },
      name: true,
      animal: true
    }}
  />
  /* END */

export default DataTableExample