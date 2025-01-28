import React from 'react'
import DataTable from '../DataTable/DataTable'
import Responsive from './Responsive'
import Body from './Body'

const DataTables = ({
  breakpoint,
  ...props
}) =>
  breakpoint
    ? <Responsive
        breakpoint={breakpoint}
        {...props}
      />
    : <DataTable
        Body={Body}
        {...props}
      />

export default DataTables