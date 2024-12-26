import React from 'react'
import TableRow from './Row.jsx'
import { rowProps } from './Utils.js'

const Foot = ({
  footRows,
  Row=TableRow,
  FootRow=Row,
  ...props
}) =>
  <tfoot>
    { footRows.map(
      (row, n) =>
        <FootRow
          key={row.key ?? n}
          {...rowProps(row)}
          {...props}
        />
    )}
  </tfoot>

export default Foot