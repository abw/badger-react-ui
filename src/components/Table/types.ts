import { MaybeTrueOrNumberString } from '@/src/types'

export type TableProps =
  HTMLTableAttrs & {
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
  head?: TableHeadSpec
  body?: TableBodySpec
  foot?: TableFootSpec
  Head?: TableHeadComponent
  Body?: TableBodyComponent
  Foot?: TableFootComponent
  Rows?: TableRowsComponent
  Row?: TableRowComponent
  Content?: TableContentComponent
  // headings?: TableRow
  // footings?: TableRow
  // head?: TableSectionProps,
  //HeadRow?: TableRowType
  //BodyRow?: TableRowType
  //FootRow?: TableRowType
  // rows?: TableRows | TableColumnsRows
  // columns?: TableColumns
}

// Content renders the thead, tbody and tfoot
export type TableContentProps = {
  head?: TableHeadSpec
  body?: TableBodySpec
  foot?: TableFootSpec
  Head?: TableHeadComponent
  Body?: TableBodyComponent
  Foot?: TableFootComponent
  Rows?: TableRowsComponent
  Row?:  TableRowComponent
}

// A table section (thead, tbody or tfoot) can be an array of rows or an
// object containing attributes for the HTML element, rows and optional Row
// component
export type TableSectionSpec = TableSectionProps | TableRowsSpec
export type TableSectionProps =
  HTMLTableSectionAttrs & {
  rows: TableRowsSpec
  Rows?: TableRowsComponent
  Row?: TableRowComponent
}

export type TableHeadSpec  = TableSectionSpec
export type TableBodySpec  = TableSectionSpec
export type TableFootSpec  = TableSectionSpec
export type TableHeadProps = TableSectionProps
export type TableBodyProps = TableSectionProps
export type TableFootProps = TableSectionProps

// A table row is an array of cells or an object containing cells, other
// attributes for the tr element, an optional th flag and Cell component
export type TableRowSpec = TableCellsSpec | TableRowProps
export type TableRowProps =
  HTMLTrAttrs & {
  cells: TableCellsSpec
  th?: boolean
  Cell?: TableCellComponent
}

export type TableRowsSpec = TableRowSpec[]
export type TableRowsProps = {
  rows: TableRowsSpec,
  th?: boolean,
  Row?: TableRowComponent
}

// Table cell can be a text value or an object containing cell attributes, a
// text item and optional th flag.  Can also contain Th, Td and Cell components.
export type TableCellsSpec = TableCellSpec[]
export type TableCellSpec = TableText | TableCellProps
export type TableCellProps =
  HTMLCellAttrs & {
  text: TableText
  th?: boolean
  Th?: TableThComponent
  Td?: TableTdComponent
  // Cell?: TableCellComponent
}

// Th and Td are specialised cells that only receive the text and other
// attributes for the HTML element
export type TableThProps =
  HTMLThAttrs & {
  text: TableText
}
export type TableTdProps =
  HTMLTdAttrs & {
  text: TableText
}

// Table cell text can be a simple value or a function which returns a
// ReactNode (TODO: or a ReactNode?)
export type TableText = TableTextValue | TableTextFn
export type TableTextValue = string | number
export type TableTextFn = (props: HTMLCellAttrs) => React.ReactNode
// TODO: should be make that generic?

// Aliases for HTML attributes for table section (thead, tbody, tfoot),
// row (tr) header (th) and data (td) cells.
export type HTMLTableAttrs = React.ComponentProps<'table'>
export type HTMLTableSectionAttrs =
  React.ClassAttributes<HTMLTableSectionElement> &
  React.HTMLAttributes<HTMLTableSectionElement>
export type HTMLTrAttrs = React.ComponentProps<'tr'>
export type HTMLThAttrs = React.ComponentProps<'th'>
export type HTMLTdAttrs = React.ComponentProps<'td'>
export type HTMLCellAttrs = HTMLThAttrs & HTMLTdAttrs

// Component types
export type TableCellComponent    = React.FC<TableCellProps>
export type TableThComponent      = React.FC<TableThProps>
export type TableTdComponent      = React.FC<TableTdProps>
export type TableRowComponent     = React.FC<TableRowProps>
export type TableRowsComponent    = React.FC<TableRowsProps>
export type TableHeadComponent    = React.FC<TableHeadProps>
export type TableBodyComponent    = React.FC<TableBodyProps>
export type TableFootComponent    = React.FC<TableFootProps>
export type TableContentComponent = React.FC<TableContentProps>


//export type TableRowObject = TableRowProps & {
//  key?: string | number
//}
//

/*
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
*/


/*
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
*/


/*
export type HeadProps = React.ComponentProps<'thead'>
export type BodyProps = React.ComponentProps<'tbody'>
export type FootProps = React.ComponentProps<'tfoot'>
export type TrProps = React.ComponentProps<'tr'>
export type ThProps = React.ComponentProps<'th'>
export type TdProps = React.ComponentProps<'td'>
export type TableAnyCellProps = Partial<ThProps> & Partial<TdProps> // Record<string, unknown>
*/
/*
export type TableCellProps<
  Props extends TableAnyCellProps = TableAnyCellProps
> =
  TableAnyCellProps & {
  th?: boolean
  text: TableCellText<Props>
  Th?: TableThComponent
  Td?: TableTdComponent
}
*/



//--------------------------------------------------------------------------
// Columns mode
//--------------------------------------------------------------------------
/*
export type TableColumns = Record<string, TableColumn>
export type TableColumn = {
  head?: string | number | TableColumnSpec
  body?: string | number | TableColumnRowFn | TableColumnSpec
}
export type TableColumnSpec = TableCellProps

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
*/
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

