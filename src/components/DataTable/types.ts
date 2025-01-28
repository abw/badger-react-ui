import { DebugOptions } from '@/src/utils'
import { dataTableModelDefaults, dataTableRenderDefaults } from './defaults'
import { MaybeWithout, PartialWith } from '@/src/types'

export type DataTableModelDefaults = typeof dataTableModelDefaults
export type DataTableRenderDefaults = typeof dataTableRenderDefaults

export type DataTableProps =
  DebugOptions &
  // Partial<DataTableModelDefaults> &
  Partial<DataTableRenderDefaults> & {
  rows: unknown[]
  storageKey?: string
  columns: string | unknown    // FIXME
  sortColumn?: string
  sortReverse?: boolean
}

export type DataTableRenderProps =
  Omit<DataTableProps, 'rows | pageNo | pageSize'> &
  DataTableRenderDefaults & {
    page: DataTablePage
    showFilters: boolean
    toggleFilters: (e: MouseEvent) => void
    filters: DataTableFilters
    setFilter: (name: string, value: DataTableFilterValue) => void
    toggleSortColumn: (column: string) => void
    toggleVisibleColumn:  (column: string) => void
    changeColumnOrder: (ids: DataTableColumnId[]) => void
  }

export type DataTableState = {
  pageNo: number
  pageSize: number
  sortColumn?: string
  sortReverse: boolean
  columnOrder: string[]
  visibleColumns: string[]
}
export type DataTableColumnId = string | number
export type DataTableColumnIds = DataTableColumnId[]
export type DataTableColumns = Record<string, DataTableColumn>
export type DataTableColumn = {
  id: DataTableColumnId
  field: string
  type: string
  heading: string,
  sortable: boolean,
  filterable: boolean,
  hidden?: boolean,
  [key:string]: unknown
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

export type DataTableSortColumnPair = [string, boolean] | [null, null]
export type DataTableFilterValue = boolean | string | number
export type DataTableFilters = Record<string, DataTableFilterValue>
export type DataTableRow = Record<string, unknown>
export type DataTableRows = DataTableRow[]
export type DataTableAlignClasses = Record<string, string>

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