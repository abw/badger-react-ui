import { extract, isArray, isObject } from '@abw/badger-utils'

export const rowProps = row =>
  isArray(row)
    ? { cells: row }
    : row

export const cellProps = cell =>
  isObject(cell)
    ? cell
    : { text: cell }

export const trAttrs = props =>
  extract(props, 'align bgcolor char charoff valign')

export const tdAttrs = props =>
  extract(props, 'colspan headers rowspan')