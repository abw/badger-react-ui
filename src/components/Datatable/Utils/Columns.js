import {
  capitalise, fail, isArray, isString, splitHash
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
  column.type  ||= 'text'
  column.label ||= capitalise(field)
  column.id    ||= field
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
  fail(`Invalid columns definition`)
}

export const datatableVisibleColumns = columns =>
  Object.keys(columns).filter(
    column => ! columns[column].hidden
  )

