import React          from 'react'
import Context        from './Context'
import DataTableTable from './Table'
import { SCROLL_X } from './constants'

const Body = ({
  scrollX,
  Table=DataTableTable,
}) =>
  <div className={scrollX ? SCROLL_X : ''}>
    <Table/>
  </div>

export const DataTableBody = Context.Consumer(Body)
export default DataTableBody