import React from 'react'
import { DataTable } from '@/src/index'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={[
      { name: 'Alan',    salary: 123456 },
      { name: 'Brian',   salary: 45678  },
      { name: 'Charlie', salary: 56789  },
    ]}
    columns={{
      name:   { },
      salary: { type: 'currency', align: 'right' },
    }}
  />
  /* END */

export default DataTableExample