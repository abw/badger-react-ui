import { DebugOptions, SelectOption } from '@/src/utils'
import { dataTableModelDefaults, dataTableRenderDefaults } from './defaults'
import { MaybeWithout, PartialWith } from '@/src/types'
import { MouseEventHandler } from 'react'
import { UseComplexValuesSetters } from '@/src/hooks'
import { PagerProps } from '../Pager/types'

export type DataTableModelDefaults = typeof dataTableModelDefaults
export type DataTableRenderDefaults = typeof dataTableRenderDefaults

export type DataTableProps =
  DebugOptions &
  Partial<DataTableModelDefaults> &
  Partial<DataTableRenderDefaults> &
  DataTableCommonProps & {
  rows: DataTableRow[]
  columns: DataTableColumnsSource,
  storageKey?: string
  // columns: string | unknown    // FIXME
  sortColumn?: string
  sortReverse?: boolean,
  className?: string,
  color?: string,
}

export type DataTableRenderProps =
  // Omit<DataTableProps, 'rows | pageNo | pageSize'> &
  DataTableRenderDefaults &
  DataTableCommonProps &
  DataTableState &
  DataTableStateSetters & {
  columns: DataTableColumns
  page: DataTablePage
  showFilters: boolean
  toggleFilters: MouseEventHandler<HTMLDivElement>
  // filters: DataTableFilters
  setFilter: (name: string, value: DataTableFilterValue) => void
  toggleSortColumn: (column: string) => void
  toggleVisibleColumn:  (column: string) => void
  changeColumnOrder: (ids: string[]) => void
  contentClass: string,
  hasFilters: boolean
  // setPageNo: (page: number) => void
}

export type DataTableCommonProps = {
  scrollX?:       boolean
  onRowClick?:    (row: DataTableRow) => void
  displayTypes?:  DataTableDisplayTypes
  Header?:        DataTableHeaderType
  Body?:          DataTableBodyType
  Table?:         DataTableTableType
  Headings:       DataTableHeadingsType
  Heading?:       DataTableHeadingType
  Filters:        DataTableFiltersType,
  Filter:         DataTableFilterType,
  Rows:           DataTableRowsType,
  Row:            DataTableRowType,
  NoRows:         DataTableNoRowsType,
  Cell:           DataTableCellType,
  Footer?:        DataTableFooterType
  Summary?:       DataTableSummaryType
  Controls?:      DataTableControlsType
  PageSize?:      DataTablePageSizeType
  Columns?:       DataTableColumnsType
  Filtering?:     DataTableFilteringType
  pager?:         PagerProps
}

export type DataTableState = {
  pageNo: number
  pageSize: number
  sortColumn?: string
  sortReverse: boolean
  columnOrder: string[]
  visibleColumns: string[]
  filters: DataTableFilters
}
export type DataTableStateSetters = UseComplexValuesSetters<DataTableState>

// export type DataTableColumnId = string | number
// export type DataTableColumnIds = DataTableColumnId[]
export type DataTableColumns = Record<string, DataTableColumn>
export type DataTableColumn = {
  id: string
  field: string
  type: string
  heading: string
  sortable: boolean
  filterable: boolean
  hidden?: boolean
  align?: DataTableColumnAlign
  right?: boolean
  center?: boolean
  selectValue?: (option: SelectOption) => DataTableFilterValue
  filterComponent?: DataTableFilterInputType
  filterPlaceholder?: string
  filterType?: string
  className?: string | ((props: DataTableCellClassProps) => string)
  trueText?: string
  falseText?: string
  display: DataTableCellDisplayFn
  [key:string]: unknown
}

export type DataTableCellClassProps = {
  row: DataTableRow
  column: DataTableColumn
  value: unknown,
  name: string,
  rowIndex: number
  cellIndex: number
}

export type DataTableColumnSource =
  string |
  DataTableColumnSourceObject

export type DataTableColumnSourceObject =
  PartialWith<DataTableColumn, 'field'> &
  {
    label?: string    // old name for heading
  }

export type DataTableColumnsSource =
  string |
  DataTableColumnSource[] |
  Record<
    string,
    boolean |
    // When specifying columns as an object the value can be an object that
    // doesn't include the field, as that's assumed from the key
    MaybeWithout<DataTableColumnSourceObject, 'field'>
  >

export type DataTableSortColumnPair = [string|undefined, boolean]
export type DataTableFilterValue = boolean | string | number | undefined
export type DataTableFilters = Record<string, DataTableFilterValue>
export type DataTableFilterInputProps = {
  value: unknown
  type?: string,
  placeholder?: string
  column: DataTableColumn
  setFilter: (value: DataTableFilterValue) => void
  // setFilter,
}
export type DataTableFilterProps = {
  name: string
  column: DataTableColumn
}
export type DataTableHeadingProps = {
  name: string
  column: DataTableColumn
}

export type DataTableRowProps = {
  row: DataTableRow
  rowIndex: number
  rowClass?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataTableCellDisplayFnProps<V=any> = {
  value: V,
  column: DataTableColumn
  [key:string]: unknown
}
export type DataTableCellDisplayFn = (props: DataTableCellDisplayFnProps) => string
export type DataTableDisplayTypes = Record<string, DataTableCellDisplayFn>

export type DataTableCellProps = {
  row: DataTableRow
  rowIndex: number
  cellIndex: number
  cellClass?: string
  column: DataTableColumn
  name: string,
  field: string,
  value?: unknown
}

export type DataTableRow = Record<string, unknown>
export type DataTableRows = DataTableRow[]

export type DataTableColumnAlign = 'left' | 'right' | 'center' | 'centre'
export type DataTableAlignClasses = Record<DataTableColumnAlign, string>

export type DataTablePage = {
  pageSize: number
  pages: number
  page: number
  pageNo: number
  total: number
  firstIndex: number
  lastIndex: number
  firstPage: number
  lastPage: number
  thisSize: number
  from: number
  to: number
  all: boolean
  one: boolean
  none: boolean
  rows: DataTableRows
}

export type DataTableHeaderType       = React.FC
export type DataTableBodyType         = React.FC
export type DataTableTableType        = React.FC
export type DataTableFooterType       = React.FC
export type DataTableSummaryType      = React.FC
export type DataTableControlsType     = React.FC
export type DataTablePageSizeType     = React.FC
export type DataTableColumnsType      = React.FC
export type DataTableFilteringType    = React.FC
export type DataTableFilterInputType  = React.FC<DataTableFilterInputProps>
export type DataTableHeadingsType     = React.FC
export type DataTableFiltersType      = React.FC
export type DataTableFilterType       = React.FC
export type DataTableRowsType         = React.FC
export type DataTableRowType          = React.FC
export type DataTableNoRowsType       = React.FC
export type DataTableCellType         = React.FC
export type DataTableHeadingType      = React.FC
