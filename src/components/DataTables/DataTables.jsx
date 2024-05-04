import React from 'react'
import DataTable from '../DataTable/DataTable.jsx'
import Body from './Body.jsx'

const DataTables = props =>
  <DataTable
    Body={Body}
    {...props}
  />

export default DataTables