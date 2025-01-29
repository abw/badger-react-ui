import { DataTableColumns, DataTableRowsData } from '../types'
import {
  descendingOrder, FieldSelector, integerSort, isFunction, numberSort,
  ObjectSortFunction, stringSort
} from '@abw/badger-utils'

type Sorter = (field: FieldSelector) => ObjectSortFunction

export const dataTableSorters: Record<string, Sorter> = {
  string:   stringSort,
  text:     stringSort,
  select:   stringSort,
  number:   numberSort,
  price:    numberSort,
  currency: numberSort,
  integer:  integerSort,
  id:       integerSort,
}

export const dataTableSort = (
  rows: DataTableRowsData,
  columns: DataTableColumns,
  sortColumn?: string,
  sortReverse?: boolean
): DataTableRowsData => {
  if (! sortColumn || ! columns[sortColumn]) {
    return rows
  }
  const column = columns[sortColumn]
  const sort   = column.sort
  const type   = column.type || 'text'
  const sorter = isFunction(sort)
    ? sort as ObjectSortFunction
    : (dataTableSorters[type] || dataTableSorters.text)(sortColumn)

  return rows.sort(
    sortReverse
      ? descendingOrder(sorter)
      : sorter
  )
}

