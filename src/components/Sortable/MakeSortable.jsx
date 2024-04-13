import React, { useState } from 'react'
import {
  DndContext, closestCenter,
  KeyboardSensor, PointerSensor,
  useSensor, useSensors, DragOverlay,
} from '@dnd-kit/core'
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'
import { restrictToParentElement } from '@dnd-kit/modifiers'
import SortableItem from './SortableItem.jsx'

export const MakeSortable = ({
  items,
  setOrder,
  List=({children}) => children,
  Item,
  modifiers=[restrictToParentElement],
  strategy=rectSortingStrategy,
  Overlay,
  ...props
}) => {
  const Context = ({ children }) => {
    const [activeItem, setActiveItem] = useState(null)
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    )
    function handleDragStart(event) {
      const item = items.findIndex( item => item.id === event.active.id )
      setActiveItem(item)
    }
    function handleDragCancel() {
      setActiveItem(null)
    }
    function handleDragEnd(event) {
      const {active, over} = event
      if (active.id !== over.id) {
        const oldIndex = items.findIndex( item => item.id === active.id )
        const newIndex = items.findIndex( item => item.id === over.id )
        items[oldIndex].moved = true
        setOrder(arrayMove(items, oldIndex, newIndex))
      }
      setActiveItem(null)
    }
    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
        modifiers={modifiers}
      >
        <SortableContext
          items={items}
          strategy={strategy}
        >
          { children }
        </SortableContext>
        { Overlay && activeItem &&
        <DragOverlay>
          <Overlay item={activeItem} {...props}/>
        </DragOverlay>
        }
      </DndContext>
    )
  }

  const Content = () =>
    <List {...props}>
      { items.map(
        item =>
          <SortableItem
            key={item.id}
            id={item.id}
            item={item}
            Item={Item}
            {...props}
            role="drag"
          />
      )}
    </List>

  return { Context, Content }
}

export default MakeSortable
