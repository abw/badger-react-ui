import React from 'react'
import { DataTable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DataTableExample = () =>
  /* START */
  <DataTable
    tableClass="lined"
    rows={animals}
    columns="id name animal role"
  />

export default DataTableExample

