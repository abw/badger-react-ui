import { MaybeTrueOrNumberString } from '@/src/types'

export type TableProps = {
  className?: string,
  size?: string
  color?: string
  border?: MaybeTrueOrNumberString
  radius?: MaybeTrueOrNumberString
  shadow?: MaybeTrueOrNumberString
  celled?: boolean
  lined?: boolean
  shaded?: boolean
  striped?: boolean
  wide?: boolean
  compact?: boolean
  compressed?: boolean
  expanded?: boolean
  headings?: TableHeadRow,
  rows?: TableBodyRow[],
  footings?: TableFootRow,
  headRows?: TableHeadRow[]
  bodyRows?: TableBodyRow[]
  footRows?: TableFootRow[]
  // columns,
}

export type TableHeadProps = {
  headRows: TableHeadRow[]
  Row?: TableRowType
  HeadRow?: TableRowType
}

export type TableBodyProps = {
  bodyRows: TableBodyRow[]
  Row?: TableRowType
  BodyRow?: TableRowType
}

export type TableFootProps = {
  footRows: TableFootRow[]
  Row?: TableRowType
  FootRow?: TableRowType
}

export type TableHeadRow = TableRowProps & {
  key?: string | number
}

export type TableBodyRow = TableRowProps & {
  key?: string | number
}

export type TableFootRow = TableRowProps & {
  key?: string | number
}

export type TableRowsProps =
  Partial<TableHeadProps> &
  Partial<TableBodyProps> &
  Partial<TableFootProps> & {
  Head?: TableHeadType
  Body?: TableBodyType
  Foot?: TableFootType
}

export type TableRowProps =
  React.ComponentProps<'tr'> & {
  th?: boolean,
  Cell?: TableCellType
  cells: Array<string | TableCellProps>
}

export type TableCellProps =
  React.ComponentProps<'th'> &
  React.ComponentProps<'td'> & {
  th?: boolean
  text: string | number | ((...args: unknown[]) => React.ReactNode)
}

export type TableCellType = React.FC<TableCellProps>
export type TableHeadType = React.FC<TableHeadProps>
export type TableBodyType = React.FC<TableBodyProps>
export type TableFootType = React.FC<TableFootProps>
export type TableRowType  = React.FC<TableRowProps>

// Columns
export type TableColumns = Record<string, TableColumn>
export type TableColumn = {
  head?: string | number | TableColumnSpec
  body?: string | number | TableColumnRowFn | TableColumnSpec
}
export type TableColumnSpec = TableCellProps
/*
export type TableColumnSpec =
  React.ComponentProps<'th'> &
  React.ComponentProps<'td'> & {
  th?: boolean
  text: string | number | TableColumnRowFn
}
*/
export type TableColumnHeadProps = {
  columns: TableColumns
}
export type TableColumnBodyProps = {
  columns: TableColumns
  rows: TableColumnRow[]
}
export type TableColumnRowProps = {
  columns: TableColumns
  row: TableColumnRow
}

export type TableColumnRow = Record<string, unknown>
export type TableColumnRowFn = (row: TableColumnRow) => React.ReactNode
export type TableColumnWithRow<T> = T & { row: TableColumnRow }
export type TableColumnCellProps = TableColumnWithRow<TableCellProps>

export type TableColumnHeadType = React.FC<TableColumnHeadProps>

/*
  headings,
  rows,
  footings,
  columns,
  bodyRows = rows,
  headRows = headings && [headings],
  footRows = footings && [footings],
  ...props
  */