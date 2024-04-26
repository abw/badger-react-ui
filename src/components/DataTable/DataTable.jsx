import React            from 'react'
import Context          from './Context.js'
import DataTableContent from './Content.jsx'
import { Themed }       from '@/src/Theme.jsx'

const DataTable = ({
  Content=DataTableContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(DataTable, 'DataTable')

