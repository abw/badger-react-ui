import { isArray, isObject } from '@abw/badger-utils'
import { TableCellProps } from './types'

export const rowProps = row =>
  isArray(row)
    ? { cells: row }
    : row

export const cellProps = (
  cell: string | number | TableCellProps
) =>
  isObject(cell)
    ? cell
    : { text: cell }

