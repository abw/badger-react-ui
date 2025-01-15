import React from 'react'
import { DataTable } from '@/src/index'
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
