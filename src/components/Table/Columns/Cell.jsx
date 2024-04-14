import React from 'react'
import { maybeFunction } from '@abw/badger-utils'

const Cell = ({
  th,
  text,
  row,
  ...props
}) =>
  th
    ? <th {...props}>
        { maybeFunction(text, { row, text }) }
      </th>
    : <td {...props}>
        { maybeFunction(text, { row, text }) }
      </td>

export default Cell