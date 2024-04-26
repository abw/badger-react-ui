import React          from 'react'
import Context        from './Context.js'
import DataTableTable from './Table.jsx'

const Body = ({
  scrollX,
  Table=DataTableTable,
}) =>
  <div className={scrollX ? 'scroll-x' : ''}>
    <Table/>
  </div>

export const DataTableBody = Context.Consumer(Body)
export default DataTableBody