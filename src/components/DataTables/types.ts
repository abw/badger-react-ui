import { DataTableColumn, DataTableProps, DataTableRowData } from '@/components/DataTable/types'

export type DataTablesResponsiveProps =
  DataTableProps & {
  breakpoint: string
}

export type DataTablesProps =
  DataTableProps & {
    breakpoint?: string
  }

export type DataTablesBodyProps = {
  bodyClass?: string
}

export type DataTablesFiltersProps = {
  minFilterWidth?: string,
  filterGap?: number | string
}

export type DataTablesFilterProps = {
  name: string
  column: DataTableColumn
}

export type DataTablesTableProps = {
  row: DataTableRowData
  rowIndex: number
}

export type DataTablesRowProps = {
  row: DataTableRowData
  rowIndex: number
  cellIndex: number
  name: string
  field: string
  column: DataTableColumn
  value: unknown
  cellClass?: string
}

