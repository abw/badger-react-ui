import { isArray, isFunction, isObject, isString } from '@abw/badger-utils'
import {
  TableCellProps, TableRowSpec, TableRowProps, TableCellSpec,
  TableSectionSpec, TableSectionProps, TableRowsSpec,
  TableColumns, TableColumnsRows, TableCellsSpec, TableColumnsRowProp,
} from './types'
import { capitalFirstLetter } from '@/src/utils'

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

export const expandTableColumns = (
  columns: TableColumns,
  rows: TableColumnsRows
) => {
  // console.log(`pre-columns: `, columns)
  columns = isString(columns)
    ? columns.split(/,\s*|\s+/).reduce(
      (columns, column) => ({
        ...columns,
        [column]: { head: capitalFirstLetter(column)}
      }),
      { }
    )
    : isArray(columns)
      ? columns.reduce(
        (columns, column) => ({ ...columns, [column]: { } }),
        { }
      )
      : columns
  // console.log(`post-expand: `, columns)

  // Construct a row of cells for the head
  const heads = Object.entries(columns)
    .reduce(
      (heads: TableCellsSpec, [name, spec]) => {
        const head = spec.head ?? ({ })
        const row = isObject(head)
          ? { text: name, ...head }
          : { text: head }
        heads.push(row as TableCellProps)
        return heads
      },
      [ ] as TableCellsSpec
    )
  const head: TableSectionProps = { rows: [heads] }

  // Construct the column specs for the body rows
  const bodyCols = Object.entries(columns)
    .reduce(
      (bodyCols: TableCellProps[], [name, spec]) => {
        const body = spec.body ?? ({ })
        const text = ({ row }: TableColumnsRowProp) => row[name]
        const row = isObject(body)
          ? { text, ...body }
          : { text: body }
        // console.log(`body row: `, row)
        bodyCols.push(row as TableCellProps)
        return bodyCols
      },
      [ ] as TableCellProps[]
    )
  // console.log(`bodyCols: `, bodyCols)

  // Now iterate over rows and extract each column
  const bodyRows = rows
    .map(
      row => bodyCols.map(
        bodyCol => {
          const { text, ...props } = bodyCol
          const textVal = isFunction(text)
            ? text({ row })
            : text
          // console.log(`row: `, row)
          // console.log(`text: `, textVal)
          return { ...props, text: textVal } as TableCellProps
        }
      )
    )
  // console.log(`bodyRows: `, bodyRows)
  const body: TableSectionProps = { rows: bodyRows }
  return [head, body]
}

/**
 * Alias for `tableRowProps` for backwards compatibility
 * @deprecated Use `tableRowProps` instead
 */
export const rowProps = tableRowProps

/**
 * Alias for `tableCellProps` for backwards compatibility
 * @deprecated Use `tableCellProps` instead
 */
export const cellProps = tableCellProps
