import React from 'react'
import { Datatable } from '@/src/index.jsx'

const DatatableExample = () => {
  return (
    /* START */
    <Datatable
      rows={[
        { id: 10101, name: 'Alan',    salary: 123456, admin: true  },
        { id: 1010,  name: 'Brian',   salary: 45678,  admin: false },
        { id: 101,   name: 'Charlie', salary: 56789,  admin: false },
      ]}
      columns={{
        id:     {
          type: 'number',
          align: 'right'
        },
        name: { },
        salary: {
          type: 'currency',
          align: 'right'
        },
        admin: {
          type: 'boolean',
          align: 'center'
        }
      }}
    />
    /* END */
  )
}

export default DatatableExample