/* eslint-disable indent */
import Sortable from './Sortable'
import { SortableDataItem, SortableProps } from './types'

export const VerticalSort = <
  T extends SortableDataItem = SortableDataItem
>(
  props: SortableProps<T>
) =>
  <Sortable
    {...props}
    direction="vertical"
  />

export default VerticalSort
