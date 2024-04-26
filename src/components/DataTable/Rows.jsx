import React        from 'react'
import Context      from './Context.js'
import DataTableRow from './Row.jsx'

const Rows = ({
  page,
  Row=DataTableRow
}) =>
  <tbody>
    { page.rows.map(
      (row, n) =>
        <Row
          key={row.id ?? n}
          row={row}
        />
    )}
  </tbody>

export const DataTableRows = Context.Consumer(Rows)
export default DataTableRows