import React from 'react'
import TableCell from './Cell.jsx'
import { cellProps } from './Utils.js'

const Row = ({
  cells,
  th=false,
  Cell=TableCell,
  ...props
}) =>
  <tr {...props}>
    { cells.map(
      (cell, n) =>
        <Cell
          key={cell.key ?? n}
          th={cell.th ?? th}
          {...cellProps(cell)}
        />
    )}
  </tr>

export default Row