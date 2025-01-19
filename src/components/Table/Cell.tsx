import { ReactNode } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { TableCellProps } from './types'

export const TableCell = ({
  th,
  text,
  ...props
}: TableCellProps) =>
  th
    ? <th {...props}>
        { maybeFunction(text, props) as ReactNode }
      </th>
    : <td {...props}>
        { maybeFunction(text, props) as ReactNode }
      </td>

export default TableCell