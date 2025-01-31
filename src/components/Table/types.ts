import { MaybeTrueOrNumberString } from '@/src/types'

export type TableProps =
  TableRowsProps & {
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
  headings?: TableRow,
  footings?: TableRow,
  rows?: TableRows | TableColumnsRows,
  columns?: TableColumns,
}

export type TableRowsProps =
  Partial<TableHeadProps> &
  Partial<TableBodyProps> &
  Partial<TableFootProps> & {
  Head?: TableHeadType
  Body?: TableBodyType
  Foot?: TableFootType
  headProps?: HeadProps
  bodyProps?: BodyProps
  footProps?: FootProps
}

export type TableHeadProps =
  HeadProps & {
  headRows: TableRows
  Row?: TableRowType
  HeadRow?: TableRowType
}

export type TableBodyProps =
  BodyProps & {
  bodyRows: TableRows
  Row?: TableRowType
  BodyRow?: TableRowType
}

export type TableFootProps =
  FootProps & {
  footRows: TableRows
  Row?: TableRowType
  FootRow?: TableRowType
}

export type TableRows = TableRow[]
export type TableRow = TableRowObject | TableCells
export type TableRowObject = TableRowProps & {
  key?: string | number
}

export type TableRowProps =
  TrProps & {
  th?: boolean,
  Cell?: TableCellComponent
  cells: TableCells
}

export type HeadProps = React.ComponentProps<'thead'>
export type BodyProps = React.ComponentProps<'tbody'>
export type FootProps = React.ComponentProps<'tfoot'>
export type TrProps = React.ComponentProps<'tr'>
export type ThProps = React.ComponentProps<'th'>
export type TdProps = React.ComponentProps<'th'>
export type TableAnyCellProps = Partial<ThProps> & Partial<TdProps> // Record<string, unknown>
export type TableCellFn<Props> = (props: Props) => React.ReactNode
export type TableCellText<Props extends TableAnyCellProps = TableAnyCellProps> =
  string | number | TableCellFn<Props>

export type TableThProps<
  Props extends ThProps = ThProps
> =
  ThProps & {
  text: TableCellText<Props>
}
export type TableTdProps<
  Props extends TdProps = TdProps
> =
  TdProps & {
  text: TableCellText<Props>
}

export type TableCellProps<
  Props extends TableAnyCellProps = TableAnyCellProps
> =
  TableAnyCellProps & {
  th?: boolean
  text: TableCellText<Props>
  Th?: TableThComponent
  Td?: TableTdComponent
}

export type TableCell<
  Props extends TableAnyCellProps = TableAnyCellProps
> = TableCellText<Props> | TableCellProps<Props>

export type TableCells<
  Props extends TableAnyCellProps = TableAnyCellProps
> = TableCell<Props>[]


export type TableCellComponent = React.FC<TableCellProps>
export type TableThComponent   = React.FC<TableThProps>
export type TableTdComponent   = React.FC<TableTdProps>

export type TableHeadType = React.FC<TableHeadProps>
export type TableBodyType = React.FC<TableBodyProps>
export type TableFootType = React.FC<TableFootProps>
export type TableRowType  = React.FC<TableRowProps>


//--------------------------------------------------------------------------
// Columns mode
//--------------------------------------------------------------------------
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

/*
const TableColumns = ({
  rows,
  columns,
  ...props
}) =>
*/

export type TableColumnsProps =
  Partial<TableColumnsHeadProps> &
  Partial<TableColumnsBodyProps> &
  Partial<TableColumnsFootProps> & {
  rows: TableColumnsRows,
  columns: TableColumns,
  Head?: TableColumnsHeadComponent
  Body?: TableColumnsBodyComponent
  Foot?: TableColumnsFootComponent
  headProps?: HeadProps
  bodyProps?: BodyProps
  footProps?: FootProps
}

export type TableColumnsHeadProps =
  HeadProps & {
  columns: TableColumns
//  Row?: TableColumnsRowType
//  HeadRow?: TableColumnsRowType
}

export type TableColumnsBodyProps =
  BodyProps & {
  columns: TableColumns
  rows: TableColumnsRows
//  BodyRow?: TableColumnsRowType
}
export type TableColumnsFootProps =
  FootProps & {
  columns: TableColumns
  rows: TableColumnsRows
//  Row?: TableColumnsRowType
//  FootRow?: TableColumnsRowType
}

export type TableColumnsRowProps = {
  // key?: string | number
  columns: TableColumns
  row: TableColumnsRow
}

export type TableColumnsRow = Record<string, unknown>
export type TableColumnsRows = TableColumnsRow[]
export type TableColumnRowFn = (row: TableColumnsRow) => React.ReactNode
export type TableColumnsWithRow<T> = T & { row: TableColumnsRow }
export type TableColumnsCellProps = TableColumnsWithRow<TableCellProps>

export type TableColumnsHeadType = React.FC<TableColumnsHeadProps>

export type TableColumnsHeadComponent = React.FC<TableColumnsHeadProps>
export type TableColumnsBodyComponent = React.FC<TableColumnsBodyProps>
export type TableColumnsFootComponent = React.FC<TableColumnsFootProps>

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


/*
export type TableThFn<Props extends ThProps = ThProps> =
  (props: Props) => React.ReactNode

export type TableTdFn<Props extends TdProps = ThProps> =
  (props: Props) => React.ReactNode
*/

