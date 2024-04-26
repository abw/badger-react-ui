import { hasValue, isBoolean, isString } from '@abw/badger-utils'

export const filterStringExact = ({ value, search }) =>
  // we have to do woolly string searching because the value returned from a select
  // component is always a string
  hasValue(value)
    ? value.toString() === search.toString()
    : false

export const filterStringContains = ({ value, search }) => {
  // more complicate string search that looks for all words in the input
  // anywhere in the string, e.g. "foo bar" should match against "bar and foo"
  const words = search.toLowerCase().split(/\s+/)

  if (hasValue(value)) {
    const match = value.toString().toLowerCase()
    return words.every(
      word => match.indexOf(word) > -1
    )
  }
  else {
    return false
  }
}

export const filterInteger = ({ value, search }) =>
  //console.log('filterInteger(%o, %o, %o) [%s][%o] == [%s][%o]', row, field, search, typeof match, match, typeof search, search);
  hasValue(value)
    ? (parseInt(value) === parseInt(search))
    : false

export const filterFloat = ({value, search }) =>
  //console.log('filterFloat(%o, %o, %o) [%s][%o] == [%s][%o]', row, field, search, typeof match, match, typeof search, search);
  hasValue(value)
    ? (parseFloat(value) === parseFloat(search))
    : false

export const coerceBoolean = value =>
  isString(value)
    ? Boolean(parseInt(value))
    : Boolean(value)

export const filterBoolean = ({ value=false, search }) =>
  // The problem here is that a vanilla select input can't have options with
  // true/false values, and values of 0/1 get converted to strings.
  // So if the search value is a string then we parse it as an integer and
  // compare it to 0.
  coerceBoolean(value) === coerceBoolean(search)

export const datatableFilterTypes = {
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

export const datatableFilter = (rows, columns, filters) => {
  const fkeys = Object.keys(filters)

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
        const filter = column.filter || datatableFilterTypes[type] || datatableFilterTypes.text
        if (hasValue(search) && (isBoolean(search) || search.length)) {
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

