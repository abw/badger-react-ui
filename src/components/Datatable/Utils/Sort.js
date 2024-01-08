import {
  descendingOrder, integerSort, isFunction, numberSort, stringSort
} from '@abw/badger-utils'

export const datatableSorters = {
  string:  stringSort,
  text:    stringSort,
  number:  numberSort,
  price:   numberSort,
  pounds:  numberSort,
  integer: integerSort,
  id:      integerSort,
}

export const datatableSort = (
  rows,
  columns,
  sortColumn,
  sortReverse
) => {
  if (! sortColumn) {
    return rows
  }
  const column = columns[sortColumn]
  const sort   = column.sort
  const type   = column.type || 'text'
  const sorter = isFunction(sort)
    ? sort
    : (datatableSorters[type] || datatableSorters.text)(sortColumn)

  return rows.sort(
    sortReverse
      ? descendingOrder(sorter)
      : sorter
  )
}

