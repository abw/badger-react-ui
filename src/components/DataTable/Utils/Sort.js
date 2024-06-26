import {
  descendingOrder, integerSort, isFunction, numberSort, stringSort
} from '@abw/badger-utils'

export const dataTableSorters = {
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
  rows,
  columns,
  sortColumn,
  sortReverse
) => {
  if (! sortColumn || ! columns[sortColumn]) {
    return rows
  }
  const column = columns[sortColumn]
  const sort   = column.sort
  const type   = column.type || 'text'
  const sorter = isFunction(sort)
    ? sort
    : (dataTableSorters[type] || dataTableSorters.text)(sortColumn)

  return rows.sort(
    sortReverse
      ? descendingOrder(sorter)
      : sorter
  )
}

