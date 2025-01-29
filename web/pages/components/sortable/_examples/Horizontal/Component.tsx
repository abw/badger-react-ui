import { HorizontalSort, Button, SortableDataItem, SortableItemProps } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import {
// PRETEND:   HorizontalSort, Button, SortableDataItem, SortableItemProps
// PRETEND: } from '@abw/badger-react-ui

type Animal = SortableDataItem & {
  animal: string
}
const animals: Animal[] = [
  { id: 100, animal: 'Ant' },
  { id: 101, animal: 'Bat' },
  { id: 102, animal: 'Cat' },
  { id: 103, animal: 'Dog' },
]

const HorizontalSortExample = () => {
  const [changed, setChanged] = React.useState(false)
  const [items, setItems] = React.useState(animals)

  const setOrder = (items: Animal[]) => {
    setItems(items)
    setChanged(true)
  }

  const resetOrder = () => {
    setItems(
      animals.map(
        row => ({ ...row, moved: false })
      )
    )
    setChanged(false)
  }

  const Item = ({
    item, setNodeRef, style, listeners, ...props
  }: SortableItemProps<Animal>) =>
    <div
      ref={setNodeRef} style={style}
      className={`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${item.moved ? 'moved' : ''}`}
      {...props}
      {...listeners}
    >
      {item.animal}
    </div>

  return (
    <>
      <div className="flex space middle mar-b-4">
        <h3>Drag Items to Set Order</h3>
        { changed &&
          <div>
            <Button
              color="brown"
              size="smallest"
              text="Reset Order"
              iconLeft="rotate-flipx"
              onClick={resetOrder}
            />
          </div>
        }
      </div>
      <div className="sortable list Horizontal">
        <HorizontalSort
          items={items}
          Item={Item}
          setOrder={setOrder}
        />
      </div>
    </>
  )
}

export default HorizontalSortExample