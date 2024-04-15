import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../../data.js'

const DatatableExample = () =>
  /* START */
  <Datatable
    rows={animals}
    columns={{
      id: { },
      name: {
        display: ({ row }) =>
          `${row.name} ${row.animal}`
      }
    }}
  />
  /* END */

export default DatatableExample