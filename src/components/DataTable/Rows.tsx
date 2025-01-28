import React          from 'react'
import Context        from './Context'
import DefaultRow     from './Row'
import DefaultNoRows  from './NoRows'

const Rows = ({
  page,
  Row=DefaultRow,
  NoRows=DefaultNoRows
}) =>
  <tbody>
    { page.rows.length
      ? page.rows.map(
        (row, rowIndex) =>
          <Row
            key={row.id ?? rowIndex}
            row={row}
            rowIndex={rowIndex}
          />
      )
      : <NoRows/>
    }
  </tbody>

export const DataTableRows = Context.Consumer(Rows)
export default DataTableRows