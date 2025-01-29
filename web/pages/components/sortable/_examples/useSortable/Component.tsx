import { useSortable, Button, SortableDataItem, SortableItemProps } from '@/src/index'
/* START */
import React from 'react'
// PRETEND: import {
// PRETEND:   useSortable, Button, SortableDataItem, SortableItemProps
// PRETEND: } from '@abw/badger-react-ui

type Animal = SortableDataItem & {
  animal: string
}
export const animals: Animal[] = [
  { id: 100, animal: 'Alan Aardvark' },
  { id: 101, animal: 'Brian Badger' },
  { id: 102, animal: 'Colin Camel' },
  { id: 103, animal: 'David Dog' },
  { id: 104, animal: 'Edward Elephant' },
  { id: 105, animal: 'Frank Ferret' },
  { id: 106, animal: 'Gerald Giraffe' },
  { id: 107, animal: 'Hector Hedgehog' },
]

const UseSortableExample = () => {
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
    <tr
      ref={setNodeRef}
      style={style}
      className={`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${item.moved ? 'moved' : ''}`}
      {...props}
      {...listeners}
    >
      <td>
        {item.id}
      </td>
      <td>
        {item.animal}
      </td>
    </tr>

  const { Context, Content } = useSortable({
    items: items,
    Item: Item,
    setOrder: setOrder
  })


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
      <Context>
        <table className="wide celled shaded sortable">
          <tbody>
            <Content/>
          </tbody>
        </table>
      </Context>
    </>
  )
}

export default UseSortableExample