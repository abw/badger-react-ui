import React from 'react'
import animals from '@/web/pages/components/datatable/_examples/animals.js'
import { DataTable } from '@/src/index'

const DataTableLastPage = () =>
  <DataTable
    debug
    rows={animals}
    columns="id name animal"
    pageSize={11}
  />

export default DataTableLastPage