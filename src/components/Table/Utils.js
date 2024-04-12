import { isArray, isObject } from '@abw/badger-utils'

export const rowProps = row =>
  isArray(row)
    ? { cells: row }
    : row

export const cellProps = cell =>
  isObject(cell)
    ? cell
    : { text: cell }

