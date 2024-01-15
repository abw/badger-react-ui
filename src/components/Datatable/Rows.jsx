import React        from 'react'
import Context      from './Context.js'
import DatatableRow from './Row.jsx'

const Rows = ({
  page,
  Row=DatatableRow
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

export const DatatableRows = Context.Consumer(Rows)
export default DatatableRows