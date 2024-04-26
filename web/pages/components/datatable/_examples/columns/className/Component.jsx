import React from 'react'
import { DataTable } from '@/src/index.jsx'

const DataTableExample = () => {
  return (
    /* START */
    <DataTable
      rows={[
        { id: 10101, name: 'Alan',    salary: 123456, admin: true  },
        { id: 1010,  name: 'Brian',   salary: 45678,  admin: false },
        { id: 101,   name: 'Charlie', salary: 56789,  admin: false },
      ]}
      columns={{
        id:     {
          type: 'number',
          className: 'text-right'
        },
        name: {
          className: 'bold',
        },
        salary: {
          type: 'currency',
          className: 'text-right'
        },
        admin: {
          type: 'boolean',
          className: 'text-center'
        }
      }}
    />
    /* END */
  )
}

export default DataTableExample