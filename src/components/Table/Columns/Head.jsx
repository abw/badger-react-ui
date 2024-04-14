import React from 'react'
import Cell from '../Cell.jsx'
import { cellProps } from '../Utils.js'

const Head = ({
  columns
}) =>
  <thead>
    <tr>
      { Object.entries(columns).map(
        ([name, column]) => {
          const cell = column.head
            ? cellProps(column.head)
            : { text: name }
          return (
            <Cell
              key={name}
              th={cell.th ?? true}
              {...cell}
            />
          )
        }
      )}
    </tr>
  </thead>

export default Head