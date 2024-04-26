import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DataTableExample = () => {
  return (
    /* START */
    <DataTable
      color="brand"
      rows={animals}
      columns="id name animal role"
    />
    /* END */
  )
}

export default DataTableExample