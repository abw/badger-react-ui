import React from 'react'
import TableRow from './Row.jsx'
import { rowProps } from './Utils.js'

const Head = ({
  headRows,
  Row=TableRow,
  HeadRow=Row,
  ...props
}) =>
  <thead>
    { headRows.map(
      (row, n) =>
        <HeadRow
          key={row.key ?? n}
          th
          {...rowProps(row)}
          {...props}
        />
    )}
  </thead>

export default Head