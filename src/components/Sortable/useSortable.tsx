import SortableItem from './SortableItem'
import { ReactNode, useState } from 'react'
import { SortableDataItem, SortableDirections, SortableProps } from './types'
import {
  DndContext, closestCenter,
  KeyboardSensor, PointerSensor,
  useSensor, useSensors, DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  restrictToParentElement, restrictToWindowEdges,
  restrictToVerticalAxis, restrictToHorizontalAxis
} from '@dnd-kit/modifiers'

const directions: SortableDirections = {
  default: {
    modifiers: [restrictToParentElement],
    strategy: rectSortingStrategy,
  },
  vertical: {
    modifiers: [restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement],
    strategy: verticalListSortingStrategy
  },
  horizontal: {
    modifiers: [restrictToHorizontalAxis, restrictToWindowEdges, restrictToParentElement],
    strategy: horizontalListSortingStrategy
  }
}

export const useSortable = <T extends SortableDataItem = SortableDataItem>({
  items,
  setOrder,
  List=({children}) => children,
  Item,
  direction = 'default',
  options = directions[direction] || directions.default,
  modifiers = options.modifiers,
  strategy = options.strategy,
  Overlay,
  ...props
}: SortableProps<T>) => {
  const Context = ({ children }: { children: ReactNode }) => {
    const [activeIndex, setActiveIndex] = useState<number|null>(null)
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    )

    const handleDragStart = (event: DragStartEvent) => {
      const index = items.findIndex(
        item => item.id === event.active.id
      )
      setActiveIndex(index)
    }

    const handleDragCancel = () =>
      setActiveIndex(null)

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event
      if (! over) {
        return
      }
      if (active.id !== over?.id) {
        const oldIndex = items.findIndex( item => item.id === active.id )
        const newIndex = items.findIndex( item => item.id === over.id )
        items[oldIndex].moved = true
        setOrder(arrayMove(items, oldIndex, newIndex))
      }
      setActiveIndex(null)
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
        { Overlay && activeIndex &&
        <DragOverlay>
          <Overlay index={activeIndex} {...props}/>
        </DragOverlay>
        }
      </DndContext>
    )
  }

  const Content = () =>
    <List {...props}>
      { items.map(
        item =>
          <SortableItem<T>
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

export default useSortable
