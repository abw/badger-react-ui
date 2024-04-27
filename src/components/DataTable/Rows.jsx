import React          from 'react'
import Context        from './Context.js'
import DefaultRow     from './Row.jsx'
import DefaultNoRows  from './NoRows.jsx'

const Rows = ({
  page,
  Row=DefaultRow,
  NoRows=DefaultNoRows
}) =>
  <tbody>
    { page.rows.length
      ? page.rows.map(
        (row, n) =>
          <Row
            key={row.id ?? n}
            row={row}
          />
      )
      : <NoRows/>
    }
  </tbody>

export const DataTableRows = Context.Consumer(Rows)
export default DataTableRows