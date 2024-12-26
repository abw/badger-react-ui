import React from 'react'
import { DataTable } from '@/src/index.jsx'

const DataTableExample = () => {
  /* START */
  const statusClasses = {
    'Done':         'green',
    'In progress':  'blue',
    'Failed':       'red'
  }
  return (
    <DataTable
      rows={[
        { text: 'Write code',          status: 'Done' },
        { text: 'Write documentation', status: 'In progress' },
        { text: 'Write tests',         status: 'Todo' },
        { text: 'Go to eleven',        status: 'Failed' },
      ]}
      columns="text status"
      tableClass="lined shaded"
      rowClass={
        ({ row }) => statusClasses[row.status] || ''
      }
    />
  )
  /* END */
}

export default DataTableExample