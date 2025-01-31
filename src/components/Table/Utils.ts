import { isArray, isObject } from '@abw/badger-utils'
import { TableCell, TableCellProps, TableRow, TableRowProps } from './types'

export const rowProps = (
  row: TableRow
): TableRowProps =>
  isArray(row)
    ? { cells: row }
    : row

export const cellProps = (
  cell: TableCell
): TableCellProps =>
  isObject(cell)
    ? cell as TableCellProps
    : { text: cell }

