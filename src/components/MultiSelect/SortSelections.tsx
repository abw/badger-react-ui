import Context          from './Context'
import Sortable         from '@/components/Sortable/Sortable'
import Icon             from '@/components/Icon/Icon'
import DefaultSelection from './Selection'
import { MultiSelectSortItem } from './types'
import { SortableItemProps } from '../Sortable'

export const MultiSelectSortSelections = Context.Consumer(
  ({
    values,
    setValuesOrder,
    selectionsClass='selections',
    dragIcon='move',
    dragIconClass='drag-icon',
    Selection=DefaultSelection,
  }) => {
    if (! values?.length) {
      return null
    }
    const setOrder = (items: MultiSelectSortItem[]) =>
      setValuesOrder(
        items.map( item => item.value )
      )

    const Item = ({
      item,
      setNodeRef,
      style,
      listeners,
      ...props
    }: SortableItemProps<MultiSelectSortItem>) =>
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
)

export default MultiSelectSortSelections
