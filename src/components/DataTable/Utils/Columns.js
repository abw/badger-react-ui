import {
  capitalise, fail, isArray, isBoolean, isObject, isString, splitHash
} from '@abw/badger-utils'

export const datatableColumnString = column => {
  const field = column
  const type  = 'text'
  const label = capitalise(field)
  return { field, type, label }
}

export const datatableColumnDefinition = column => {
  if (isString(column)) {
    column = { field: column }
  }
  const { field } = column
  column.type    ||= 'text'
  column.label   ||= capitalise(field)  // original name, but I kept using heading
  column.heading ||= column.label,
  column.id      ||= field
  return column
}

export const datatableColumnDefinitions = columns => {
  if (isString(columns)) {
    return splitHash(
      columns,
      datatableColumnDefinition
    )
  }
  if (isArray(columns)) {
    return columns.reduce(
      (colshash, column) => {
        const coldef = datatableColumnDefinition(column)
        colshash[coldef.field] = coldef
        return colshash
      },
      { }
    )
  }
  if (isObject(columns)) {
    return Object.entries(columns).reduce(
      (colshash, [field, column]) => {
        // allow a column to be marked as false to prevent inclusion
        if (isBoolean(column) && ! column) {
          return colshash
        }
        const coldef = datatableColumnDefinition({
          // column can also be any true value which might not be iterable
          ...(isObject(column) ? column : { }),
          field
        })
        colshash[coldef.field] = coldef
        return colshash
      },
      { }
    )
  }
  fail(`Invalid columns definition`)
}

export const datatableVisibleColumns = (columns, saved) => {
  // If we have a saved (in local storage) list of visible columns then we
  // must assert that they are all still defined in the columns schema.
  // It's possible that the list of columns has changed since we last stored
  // the visible columns (or the user isn't using a unique storage key).
  // Otherwise we look for all columns that don't have the hidden flag set.
  if (saved) {
    const visible = saved
      .filter( column => columns[column] )
    if (visible.length) {
      return visible
    }
  }
  return Object.keys(columns)
    .filter( column => ! columns[column].hidden )
}

export const datatableColumnOrder = (columns, saved) => {
  // Similar to the above, if we have a saved list of the column order then we
  // must assert that they are all still defined in the columns schema.
  if (saved) {
    const order = saved.filter( column => columns[column] )
    if (order.length) {
      return order
    }
  }
  return Object.keys(columns)
}

export const datatableSortColumn = (columns, savedColumn, savedReverse) => {
  // Similar to the above, if we have a saved value for the sort column
  // (and optional reverse order flag) then we must assert that the column
  // is still valid are all still defined in the columns schema.
  if (savedColumn && columns[savedColumn]) {
    return [savedColumn, savedReverse]
  }
  return [null, null]
}

