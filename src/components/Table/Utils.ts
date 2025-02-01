import { isArray, isObject } from '@abw/badger-utils'
import {
  TableCellProps, TableRowSpec, TableRowProps, TableCellSpec,
  TableSectionSpec, TableSectionProps, TableRowsSpec,
} from './types'

export const tableSectionProps = (
  section: TableSectionSpec
): TableSectionProps =>
  isArray(section)
    ? {
        // handle the case where a section is defined as an array of cells
        // rather than an array of rows, e.g. change these:
        // From: ['Heading1', 'Heading2']
        //   to: [['Heading1', 'Heading2']]
        // From: [{ text: 'Heading1' }, 'Heading2']
        //   to: [[{ text: 'Heading1' }, 'Heading2']]
        // But leave these unchanged as they're already an array of rows
        //  [['Heading1', 'Heading2']]
        //  [{ cells: ['Heading1', 'Heading2'], className: 'foo' }]
        rows: (
          isArray(section?.[0]) ||
          (isObject(section?.[0]) && (section?.[0] as TableRowProps)?.cells))
          ? section as TableRowsSpec
          : [section] as TableRowsSpec
      }
    : section

export const tableRowProps = (
  row: TableRowSpec
): TableRowProps =>
  isArray(row)
    ? { cells: row }
    : row

export const tableCellProps = (
  cell: TableCellSpec
): TableCellProps =>
  isObject(cell)
    ? cell as TableCellProps
    : { text: cell }

