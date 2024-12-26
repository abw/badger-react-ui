import React from 'react'
import Cell from './Cell.jsx'
import { cellProps } from '../Utils.js'

const Row = ({
  row,
  columns,
}) =>
  <tr>
    { Object.entries(columns).map(
      ([name, column]) => {
        const cell = column.body
          ? cellProps(column.body)
          : { text: row[name] }
        return (
          <Cell
            key={name}
            th={cell.th ?? false}
            row={row}
            {...cell}
          />
        )
      }
    )}
  </tr>

export default Row