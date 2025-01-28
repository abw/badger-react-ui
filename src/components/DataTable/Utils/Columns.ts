import {
  capitalise, fail, isArray, isBoolean, isObject, isString, splitHash
} from '@abw/badger-utils'
import {
  DataTableColumn, DataTableColumns, DataTableColumnSource,
  DataTableColumnSourceObject, DataTableColumnsSource, DataTableSortColumnPair
} from '../types'

export const dataTableColumnDefinition = (
  source: DataTableColumnSource
): DataTableColumn => {
  const columnObject: DataTableColumnSourceObject = isString(source)
    ? { field: source }
    : source

  const {
    field,
    type = 'text',
    label,
    heading = label ?? capitalise(field),
    id = field,
    sortable = true,
    filterable = true,
    hidden = ! (columnObject.visible ?? true),
    ...rest
  } = columnObject

  return {
    field, type, heading, id, sortable, filterable,
    // only add hidden if it's true
    ...(hidden ? { hidden } : { }),
    ...rest
  }
}

export const dataTableColumnDefinitions = (
  columns: DataTableColumnsSource
): DataTableColumns => {
  if (isString(columns)) {
    return splitHash(
      columns,
      dataTableColumnDefinition
    ) as DataTableColumns
  }
  if (isArray(columns)) {
    return columns.reduce(
      (columns, source) => {
        const column = dataTableColumnDefinition(source)
        columns[column.field] = column
        return columns
      },
      { } as DataTableColumns
    )
  }
  if (isObject(columns)) {
    return Object
      .entries(columns)
      .reduce(
        (columns, [field, source]) => {
          // allow a column to be marked as false to prevent inclusion
          if (isBoolean(source) && ! source) {
            return columns
          }
          const column = dataTableColumnDefinition({
            // column can also be any true value which might not be iterable
            ...(isObject(source) ? source : { }),
            field
          })
          columns[column.field] = column
          return columns
        },
        { } as DataTableColumns
      )
  }
  fail(`Invalid columns definition`)
}

export const dataTableVisibleColumns = (
  columns: DataTableColumns,
  saved?: string[]
) => {
  // If we have a saved (in local storage) list of visible columns then we
  // must assert that they are all still defined in the columns schema.
  // It's possible that the list of columns has changed since we last stored
  // the visible columns (or the user isn't using a unique storage key).
  // Or the column definitions might have changed and some columns that were
  // previously visible are now hidden.  If we don't have a saved list of
  // visible columns then we default to all columns that aren't hidden.
  if (saved) {
    const visible = saved
      .filter(
        column => columns[column] && ! columns[column].hidden
      )
    if (visible.length) {
      return visible
    }
  }
  return Object
    .keys(columns)
    .filter(
      column => ! columns[column].hidden
    )
}

export const dataTableColumnOrder = (
  columns: DataTableColumns,
  saved?: string[]
) => {
  // Similar to the above, if we have a saved list of the column order then we
  // must assert that they are all still defined in the columns schema and
  // not hidden
  if (saved) {
    const order = saved
      .filter(
        column => columns[column] && ! columns[column].hidden
      )
    // we must also add on any new columns
    const orderHas = splitHash(order) as Record<string, boolean>
    order.push(
      ...Object
        .keys(columns)
        .filter(
          name => ! orderHas[name] && ! columns[name].hidden
        )

    )
    if (order.length) {
      return order
    }
  }
  return Object
    .keys(columns)
    .filter(
      column => ! columns[column].hidden
    )
}

export const dataTableSortColumn = (
  columns: DataTableColumns,
  savedColumn?: string,
  savedReverse: boolean = false
): DataTableSortColumnPair => {
  // Similar to the above, if we have a saved value for the sort column
  // (and optional reverse order flag) then we must assert that the column
  // is still defined in the columns schema and not hidden
  if (savedColumn && columns[savedColumn] && ! columns[savedColumn].hidden) {
    return [savedColumn, savedReverse]
  }
  return [undefined, false]
}

