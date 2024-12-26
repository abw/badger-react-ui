import React from 'react'
import DataTable from '../DataTable/DataTable.jsx'
import Responsive from './Responsive.jsx'
import Body from './Body.jsx'

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