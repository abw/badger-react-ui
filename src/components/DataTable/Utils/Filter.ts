import { hasValue, isBoolean } from '@abw/badger-utils'
import { DataTableColumns, DataTableFilterFn, DataTableFilters, DataTableFilterTypes, DataTableRows } from '../types'
import { coerceBoolean, coerceFloat, coerceInteger } from '@/src/utils'

export const filterStringExact: DataTableFilterFn = ({ value, search }) =>
  // we have to do woolly string searching because the value returned from a select
  // component is always a string
  hasValue(value)
    ? String(value) === String(search)
    : false

export const filterStringContains: DataTableFilterFn = ({ value, search }) => {
  // more complicate string search that looks for all words in the input
  // anywhere in the string, e.g. "foo bar" should match against "bar and foo"
  const words = String(search).toLowerCase().split(/\s+/)

  if (hasValue(value)) {
    const match = String(value).toLowerCase()
    return words.every(
      word => match.indexOf(word) > -1
    )
  }
  else {
    return false
  }
}

export const filterInteger: DataTableFilterFn = ({ value, search }) =>
  //console.log('filterInteger(%o, %o, %o) [%s][%o] == [%s][%o]', row, field, search, typeof match, match, typeof search, search);
  hasValue(value)
    ? (coerceInteger(value) === coerceInteger(search))
    : false

export const filterFloat: DataTableFilterFn = ({value, search }) =>
  //console.log('filterFloat(%o, %o, %o) [%s][%o] == [%s][%o]', row, field, search, typeof match, match, typeof search, search);
  hasValue(value)
    ? (coerceFloat(value) === coerceFloat(search))
    : false

export const filterBoolean: DataTableFilterFn = ({ value=false, search }) =>
  // The problem here is that a vanilla select input can't have options with
  // true/false values, and values of 0/1 get converted to strings.
  // So if the search value is a string then we parse it as an integer and
  // compare it to 0.
  coerceBoolean(value) === coerceBoolean(search)

export const dataTableFilterTypes: DataTableFilterTypes = {
  string:  filterStringContains,
  text:    filterStringContains,
  id:      filterStringContains,
  number:  filterStringContains,
  price:   filterStringContains,
  pounds:  filterStringContains,
  select:  filterStringExact,
  boolean: filterBoolean,
  integer: filterInteger,
  float:   filterFloat,
}

export const dataTableFilter = (
  rows: DataTableRows,
  columns: DataTableColumns,
  filters: DataTableFilters
) => {
  const fkeys = Object
    .keys(filters)
    .filter( name => columns[name] )

  if (fkeys.length === 0) {
    return rows
  }

  return rows.filter(
    row => fkeys.every(
      fkey => {
        const search = filters[fkey]
        const column = columns[fkey]
        const field  = column.field || fkey
        const value  = row[field]
        const type   = column.filterType || column.type
        const filter = column.filter || dataTableFilterTypes[type] || dataTableFilterTypes.text
        if (hasValue(search) && (isBoolean(search) || String(search).length)) {
          return filter({ row, field, value, search })
        }
        else {
          // if there is no search term then all rows match
          return true
        }
      }
    )
  )
}

