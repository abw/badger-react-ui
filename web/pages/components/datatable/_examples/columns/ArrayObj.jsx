import React from 'react'
import { DataTable } from '@/src/index'
import animals from '../animals.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns={[
      { field: 'id',   heading: 'Ref.', type: 'number' },
      { field: 'name', heading: 'Username' },
      { field: 'animal' },
      { field: 'role'   },
    ]}
  />
  /* END */

export default DataTableExample
