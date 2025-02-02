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
  head?: TableHeadSpec
  body?: TableBodySpec
  foot?: TableFootSpec
  Head?: TableHeadComponent
  Body?: TableBodyComponent
  Foot?: TableFootComponent
  Rows?: TableRowsComponent
  Row?: TableRowComponent
  HeadRow?: TableRowComponent
  BodyRow?: TableRowComponent
  FootRow?: TableRowComponent
  Content?: TableContentComponent
  rows?: TableColumnsRows
  columns?: TableColumns
} & HTMLTableAttrs


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
  HeadRow?: TableRowComponent
  BodyRow?: TableRowComponent
  FootRow?: TableRowComponent
}

// A table section (thead, tbody or tfoot) can be an array of rows or an
// object containing attributes for the HTML element, rows and optional Row
// component
export type TableSectionSpec = TableSectionProps | TableRowsSpec | TableCellsSpec
export type TableSectionProps ={
  rows: TableRowsSpec
  Rows?: TableRowsComponent
  Row?: TableRowComponent
} & HTMLTableSectionAttrs

export type TableHeadSpec  = TableSectionSpec
export type TableBodySpec  = TableSectionSpec
export type TableFootSpec  = TableSectionSpec
export type TableHeadProps = TableSectionProps
export type TableBodyProps = TableSectionProps
export type TableFootProps = TableSectionProps

// A table row is an array of cells or an object containing cells, other
// attributes for the tr element, an optional th flag and Cell component
export type TableRowSpec = TableCellsSpec | TableRowProps
export type TableRowProps = {
  cells: TableCellsSpec
  th?: boolean
  Cell?: TableCellComponent
} & HTMLTrAttrs

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
export type TableCellProps<Props=HTMLCellAttrs> = {
  text: TableText<Props>
  th?: boolean
  Th?: TableThComponent
  Td?: TableTdComponent
  // Cell?: TableCellComponent
} & HTMLCellAttrs

// Th and Td are specialised cells that only receive the text and other
// attributes for the HTML element
export type TableThProps = {
  text: TableText
} & HTMLThAttrs

export type TableTdProps = {
  text: TableText
} & HTMLTdAttrs

// Table cell text can be a simple value or a function which returns a
// ReactNode (TODO: or a ReactNode?)
export type TableText<Props=HTMLCellAttrs> = TableTextValue | TableTextFn<Props>
export type TableTextValue = string | number
export type TableTextFn<Props=HTMLCellAttrs> = (props: Props) => React.ReactNode
// TODO: should that be generic?

// Aliases for HTML attributes for table section (thead, tbody, tfoot),
// row (tr) header (th) and data (td) cells.
export type HTMLTableAttrs = React.ComponentPropsWithoutRef<'table'>
export type HTMLTableSectionAttrs =
  React.ClassAttributes<HTMLTableSectionElement> &
  React.HTMLAttributes<HTMLTableSectionElement>
export type HTMLTrAttrs = React.ComponentPropsWithoutRef<'tr'>
export type HTMLThAttrs = React.ComponentPropsWithoutRef<'th'>
export type HTMLTdAttrs = React.ComponentPropsWithoutRef<'td'>
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

//--------------------------------------------------------------------------
// Columns mode
//--------------------------------------------------------------------------
export type TableColumns = string | string[] | TableColumnsTable
export type TableColumnsTable = Record<string, TableColumn>
export type TableColumn = {
  head?: TableColumnSection
  body?: TableColumnSection
}
export type TableColumnSection = TableColumnSectionText | TableColumnSectionProps
export type TableColumnSectionText = TableText<TableColumnsRowProp>
export type TableColumnSectionProps = TableCellProps<TableColumnsRowProp>

export type TableColumnsRowProp = {
  row: TableColumnsRow
}
export type TableColumnsRow = Record<string, unknown>
export type TableColumnsRows = TableColumnsRow[]
export type TableColumnsRowFn = (row: TableColumnsRow) => JSX.Element

