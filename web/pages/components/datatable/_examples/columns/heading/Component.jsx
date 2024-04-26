import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../../data.js'

const DataTableExample = () => {
  return (
    /* START */
    <DataTable
      rows={animals}
      columns={{
        id:   { heading: 'User ID' },
        name: { heading: 'User Name' }
      }}
    />
    /* END */
  )
}

export default DataTableExample