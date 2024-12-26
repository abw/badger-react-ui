import React from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

export const SortableItem = ({
  id,
  item,
  Item,
  ...props
}) => {
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
