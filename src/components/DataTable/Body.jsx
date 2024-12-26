import React          from 'react'
import Context        from './Context.js'
import DataTableTable from './Table.jsx'
import { SCROLL_X } from './Constants.js'

const Body = ({
  scrollX,
  Table=DataTableTable,
}) =>
  <div className={scrollX ? SCROLL_X : ''}>
    <Table/>
  </div>

export const DataTableBody = Context.Consumer(Body)
export default DataTableBody