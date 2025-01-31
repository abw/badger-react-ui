import { ReactNode } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { TableColumnsCellProps } from '../types'

const Cell = ({
  th,
  text,
  row,
  ...props
}: TableColumnsCellProps) =>
  th
    ? <th {...props}>
        { maybeFunction(text, { row, text }) as ReactNode }
      </th>
    : <td {...props}>
        { maybeFunction(text, { row, text }) as ReactNode }
      </td>

export default Cell