import React from 'react'
import { DataTable } from '@/src/index'
import animals from '../animals.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    rows={animals}
    columns="id name animal role"
    storageKey="badger-datatable-animals-demo1"
  />
  /* END */

export default DataTableExample