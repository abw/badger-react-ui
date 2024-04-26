import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DataTableExample = () => {
  /* START */
  const roleColors = {
    'admin':     'red',
    'user':      'blue',
    'guest':     'grey',
    'superstar': 'violet'
  }

  // extra data to pass to display functions
  const extra = { roleColors }

  // rowClass now received roleColors
  const rowClass = ({ row, roleColors }) =>
    roleColors[row.role]

  // column display functions now receive roleColors
  const columns={
    id:     { },
    name:   { },
    animal: { },
    role:   {
      display: ({ row, roleColors }) =>
        <div className={`inverse text-center pad-h-2 bdr-2 ${roleColors[row.role]}`}>
          {row.role}
        </div>
    }
  }

  return (
    <DataTable
      tableClass="lined shaded"
      rows={animals}
      columns={columns}
      rowClass={rowClass}
      extra={extra}
    />
  )
  /* END */
}

export default DataTableExample

