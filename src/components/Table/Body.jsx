import React from 'react'
import TableRow from './Row.jsx'
import { rowProps } from './Utils.js'

const Body = ({
  bodyRows,
  Row=TableRow,
  BodyRow=Row,
  ...props
}) =>
  <tbody>
    { bodyRows.map(
      (row, n) =>
        <BodyRow
          key={row.key ?? n}
          {...rowProps(row)}
          {...props}
        />
    )}
  </tbody>

export default Body