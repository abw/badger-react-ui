import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { SortableDataItem, SortableItemWrapperProps } from './types'

export const SortableItem = <
  T extends SortableDataItem = SortableDataItem
>({
    id,
    item,
    Item,
    ...props
  }: SortableItemWrapperProps<T>) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id})
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  }
  return (
    <Item
      item={item}
      setNodeRef={setNodeRef}
      style={style}
      listeners={listeners}
      {...attributes}
      {...props}
    />
  )
}

export default SortableItem
