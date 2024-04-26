import React from 'react'
import { DataTable } from '@/src/index.jsx'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={[
      { name: 'Alan'    },
      { name: 'Brian'   },
      { name: 'Charlie' },
    ]}
    columns="name"
  />
  /* END */

export default DataTableExample