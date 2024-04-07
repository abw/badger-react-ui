import { useState } from 'react'
import Storage from '@/src/utils/storage.js'
import { datatableVisibleColumns } from './Columns.js'

const State = ({
  storageKey,
  columns,
  ...props
}) => {
  const defaults = {
    pageNo: props.pageNo ?? 1,
    pageSize: props.pageSize ?? 10,
    sortColumn: props.sortColumn ?? null,
    sortReverse: props.sortReverse ?? null,
    columnOrder: Object.keys(columns),
    visibleColumns: datatableVisibleColumns(columns)
  }

  // TODO: check for column changes, pageNo being out of range, etc.

  const store = storageKey && Storage(storageKey)
  const [state, setState] = useState(
    store
      ? store.get('state', defaults)
      : defaults
  )
  // console.log(`prepared state: `, state)

  const updateState = props =>
    setState(
      oldState => {
        const newState = { ...oldState, ...props }
        if (store) {
          store.set('state', newState)
        }
        return newState
      }
    )
  const setPageNo   = pageNo   => updateState({ pageNo })
  const setPageSize = pageSize => updateState({ pageSize })
  const setSortColumn = sortColumn => updateState({ sortColumn })
  const setSortReverse = sortReverse => updateState({ sortReverse })
  const setColumnOrder = columnOrder => updateState({ columnOrder })
  const setVisibleColumns = visibleColumns => updateState({ visibleColumns })

  return {
    ...state,
    setPageNo,
    setPageSize,
    setSortColumn,
    setSortReverse,
    setColumnOrder,
    setVisibleColumns
  }
}

export default State