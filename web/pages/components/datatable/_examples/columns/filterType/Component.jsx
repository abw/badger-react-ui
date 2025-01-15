import React from 'react'
import { DataTable } from '@/src/index'
import animals from '../../animals.js'

const DataTableExample = () =>
  /* START */
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
          { value: [200],      text: '200+'},
        ],
        filter: ({ row, search }) => {
          const [min, max] = search
          return row.id >= min &&
            (max ? (row.id <= max) : true)
        }
      },
      name: true,
    }}
  />
  /* END */

export default DataTableExample