import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DataTableExample = () => {
  return (
    /* START */
    <DataTable
      rows={animals}
      columns="id name animal role"
      pager={{ size: 'smaller', color: 'blue' }}
    />
    /* END */
  )
}

export default DataTableExample