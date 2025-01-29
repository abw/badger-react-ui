import { Alignment, DebugOptions, SelectOption } from '@/src/utils'
import { dataTableModelDefaults, dataTableRenderDefaults } from './defaults'
import { MaybeWithout, PartialWith } from '@/src/types'
import { MouseEventHandler } from 'react'
import { UseComplexValuesSetters } from '@/src/hooks'
import { PagerProps } from '../Pager/types'
import { SortableDataItem } from '../Sortable'

export type DataTableModelDefaults = typeof dataTableModelDefaults
export type DataTableRenderDefaults = typeof dataTableRenderDefaults

export type DataTableProps =
  DebugOptions &
  Partial<DataTableModelDefaults> &
  Partial<DataTableRenderDefaults> &
  DataTableCommonProps & {
  rows: DataTableRowData[]
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
  setFilter: (name: string, value: DataTableFilterValue) => void
  toggleSortColumn: (column: string) => void
  toggleVisibleColumn:  (column: string) => void
  changeColumnOrder: (ids: string[]) => void
  contentClass: string,
  hasFilters: boolean
}

export type DataTableCommonProps = {
  scrollX?:       boolean
  onRowClick?:    (row: DataTableRowData) => void
  displayTypes?:  DataTableDisplayTypes
  Content?:       DataTableContentComponent
  Header?:        DataTableHeaderComponent
  Body?:          DataTableBodyComponent
  Table?:         DataTableTableComponent
  Headings?:      DataTableHeadingsComponent
  Heading?:       DataTableHeadingComponent
  Filters?:       DataTableFiltersComponent
  Filter?:        DataTableFilterComponent
  Rows?:          DataTableRowsComponent
  Row?:           DataTableRowComponent
  NoRows?:        DataTableNoRowsComponent
  Cell?:          DataTableCellComponent
  Footer?:        DataTableFooterComponent
  Summary?:       DataTableSummaryComponent
  Controls?:      DataTableControlsComponent
  PageSize?:      DataTablePageSizeComponent
  Columns?:       DataTableColumnsComponent
  Filtering?:     DataTableFilteringComponent
  pager?:         PagerProps
}

export type DataTableState = {
  pageNo: number
  pageSize: number
  sortColumn?: string
  sortReverse: boolean
  columnOrder: string[]
  visibleColumns: string[]
  filters: DataTableFilterValues
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
  align?: Alignment
  right?: boolean
  center?: boolean
  selectValue?: (option: SelectOption) => DataTableFilterValue
  filterComponent?: DataTableFilterInputComponent
  filterPlaceholder?: string
  filterType?: string
  filter?: DataTableFilterFn
  className?: string | ((props: DataTableCellClassProps) => string)
  trueText?: string
  falseText?: string
  display?: DataTableCellDisplayFn
  [key:string]: unknown
}

export type DataTableCellClassProps = {
  row: DataTableRowData
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
export type DataTableFilterValues = Record<string, DataTableFilterValue>
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

export type DataTableSortProps = {
  rows: DataTableRowsData,
  columns: DataTableColumns,
  sortColumn?: string,
  sortReverse?: boolean
}

export type DataTableSortItem = SortableDataItem & {
  heading: string
}

export type DataTableSortColumnExtraProps =  {
  toggleVisibleColumn: (column: string) => void
  isVisible: Record<string, boolean>
}

export type DataTableHeadingProps = {
  name: string
  column: DataTableColumn
}

export type DataTableRowProps = {
  row: DataTableRowData
  rowIndex: number
  rowClass?: string
}

export type DataTableDisplayTypes = Record<string, DataTableCellDisplayFn>
export type DataTableCellDisplayFn = (props: DataTableCellDisplayFnProps) => string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataTableCellDisplayFnProps<V=any> = {
  value: V,
  column: DataTableColumn
  [key:string]: unknown
}

export type DataTableFilterTypes= Record<string, DataTableFilterFn>
export type DataTableFilterFn = (props: DataTableFilterFnProps) => boolean
export type DataTableFilterFnSearch = string | number | boolean
export type DataTableFilterFnProps = {
  value: unknown
  search: DataTableFilterFnSearch
  row?: DataTableRowData
  field?: string
}

export type DataTableCellProps = {
  row: DataTableRowData
  rowIndex: number
  cellIndex: number
  cellClass?: string
  column: DataTableColumn
  name: string,
  field: string,
  value?: unknown
}

export type DataTableRowData = Record<string, unknown>
export type DataTableRowsData = DataTableRowData[]

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
  rows: DataTableRowsData
}

export type DataTableContentComponent      = React.FC
export type DataTableHeaderComponent       = React.FC
export type DataTableBodyComponent         = React.FC
export type DataTableTableComponent        = React.FC
export type DataTableFooterComponent       = React.FC
export type DataTableSummaryComponent      = React.FC
export type DataTableControlsComponent     = React.FC
export type DataTablePageSizeComponent     = React.FC
export type DataTableColumnsComponent      = React.FC
export type DataTableFilteringComponent    = React.FC
export type DataTableFilterInputComponent  = React.FC<DataTableFilterInputProps>
export type DataTableHeadingsComponent     = React.FC
export type DataTableFiltersComponent      = React.FC
export type DataTableFilterComponent       = React.FC
export type DataTableRowsComponent         = React.FC
export type DataTableRowComponent          = React.FC
export type DataTableNoRowsComponent       = React.FC
export type DataTableCellComponent         = React.FC
export type DataTableHeadingComponent      = React.FC
