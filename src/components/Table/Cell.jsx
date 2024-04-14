import React from 'react'
import { maybeFunction } from '@abw/badger-utils'

const Cell = ({
  th,
  text,
  ...props
}) =>
  th
    ? <th {...props}>
        { maybeFunction(text, props) }
      </th>
    : <td {...props}>
        {console.log(`cell ${text} props: `, props)}
        { maybeFunction(text, props) }
      </td>

export default Cell