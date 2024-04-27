import { DataTable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { DataTable } from '@abw/badger-react-ui
import animals from '../animals.js'

const DataTableExample = () =>
  <DataTable
    rows={animals}
    columns="id name animal role"
  />

export default DataTableExample