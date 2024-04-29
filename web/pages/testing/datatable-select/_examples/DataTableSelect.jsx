import React from 'react'
import animals from '@/web/pages/components/datatable/_examples/animals.js'
import { DataTable } from '@/src/index.jsx'
import { hasValue } from '@abw/badger-utils'

const DataTableSelect = () =>
  <DataTable
    rows={animals}
    columns={{
      id: {
        type: 'id',
        filterType: 'select',
        selectOptions: [
          { value: [1, 49],    text: '1 to 49'},
          { value: [50, 99],   text: '50 to 99'},
          { value: [100, 199], text: '100 to 199'},
          { value: [200, 9999], text: '200+'},
        ],
        filter: ({ row, search }) => {
          const [min, max] = search
          return row.id >= min && (hasValue(max) ? (row.id <= max) : true)
        }
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

export default DataTableSelect