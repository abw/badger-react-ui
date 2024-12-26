import React from 'react'
import { DataTable } from '@/src/index.jsx'
import animals from '../animals.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns={[
      'id',
      'name',
      'animal',
      'role'
    ]}
  />
  /* END */

export default DataTableExample
