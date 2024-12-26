import React from 'react'
import { DataTable } from '@/src/index.jsx'
import animals from '../animals.js'

const DataTableExample = () => {
  return (
    /* START */
    <DataTable
      rows={animals}
      columns="id name animal role"
      color="brand"
    />
    /* END */
  )
}

export default DataTableExample