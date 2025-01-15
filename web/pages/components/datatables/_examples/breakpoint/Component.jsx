import React from 'react'
import { DataTables } from '@/src/index'
import animals from '../animals.js'

const DataTablesExample = () =>
  /* START */
  <DataTables
    breakpoint="400px"
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
  /* END */

export default DataTablesExample