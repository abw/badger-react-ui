import { DataTables } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { DataTables } from '@abw/badger-react-ui
import animals from '../animals.js'

const DataTablesExample = () =>
  <DataTables
    rows={animals}
    columns={{
      id: {
        heading: 'ID',
        type: 'id',
      },
      name: { } ,
      animal: { },
      role: {
        filterType: 'select',
        selectOptions: [
          { value: 'guest',     text: 'Guest' },
          { value: 'user',      text: 'User' },
          { value: 'admin',     text: 'Admin' },
          { value: 'superstar', text: 'Superstar' },
        ]
      }
    }}
  />

export default DataTablesExample