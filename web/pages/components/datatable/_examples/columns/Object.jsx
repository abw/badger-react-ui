import React from 'react'
import { DataTable } from '@/src/index'
import animals from '../animals.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns={{
      id:     { heading: 'Ref.', type: 'number' },
      name:   { },
      animal: true,
      role:   false,
    }}
  />
  /* END */

export default DataTableExample
