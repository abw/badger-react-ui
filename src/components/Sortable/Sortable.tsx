import useSortable from './useSortable'
import { SortableDataItem, SortableProps } from './types'

export const Sortable = <
  T extends SortableDataItem = SortableDataItem
>(props: SortableProps<T>) => {
  const { Context, Content } = useSortable(props)
  return (
    <Context>
      <Content/>
    </Context>
  )
}

export default Sortable
