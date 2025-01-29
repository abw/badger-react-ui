import React            from 'react'
import Context          from './Context.js'
import Sortable         from '@/components/Sortable/Sortable'
import Icon             from '@/components/Icon/Icon'
import DefaultSelection from './Selection.jsx'

const SortSelections = ({
  values,
  setValues,
  selectionsClass='selections',
  dragIcon='move',
  dragIconClass='drag-icon',
  Selection=DefaultSelection,
}) => {
  const setOrder = items =>
    setValues(
      items.map( item => item.value )
    )

  const Item = ({
    item,
    setNodeRef,
    style,
    listeners,
    ...props
  }) =>
    <div
      ref={setNodeRef}
      style={style}
      className={`sortable item ${item.moved ? 'moved' : ''}`}
      {...props}
    >
      <Selection
        selection={item.value}
        dragHandle={
          <div className={dragIconClass} {...listeners}>
            <Icon name={dragIcon}/>
          </div>
        }
      />
    </div>

  return (
    <div className={selectionsClass}>
      <Sortable
        items={
          values.map(
            (value, n) => ({ id: n + 1, value })
          )
        }
        Item={Item}
        setOrder={setOrder}
      />
    </div>
  )
}

export const MultiSelectSortSelections = Context.Consumer(SortSelections)
export default MultiSelectSortSelections
