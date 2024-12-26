import React from 'react'
import Row from './Row.jsx'

const Body = ({
  columns,
  rows=[],
  ...props
}) =>
  <tbody>
    { rows.map(
      (row, n) =>
        <Row
          key={row.id ?? n}
          row={row}
          columns={columns}
          {...props}
        />
    )}
  </tbody>

export default Body