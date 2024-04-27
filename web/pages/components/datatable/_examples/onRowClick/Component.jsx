import React from 'react'
import { DataTable } from '@/src/index.jsx'
import animals from '../animals.js'

const DataTableExample = () => {
  return (
    /* START */
    <DataTable
      rows={animals}
      columns="id name animal role"
      onRowClick={
        ({ row }) => window.alert(`Animal #${row.id}: ${row.name}`)
      }
    />
    /* END */
  )
}

export default DataTableExample