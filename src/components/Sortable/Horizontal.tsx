/* eslint-disable indent */
import Sortable from './Sortable'
import { SortableDataItem, SortableProps } from './types'

export const HorizontalSort = <
  T extends SortableDataItem = SortableDataItem
>(
  props: SortableProps<T>
) =>
  <Sortable
    {...props}
    direction="horizontal"
  />

export default HorizontalSort
