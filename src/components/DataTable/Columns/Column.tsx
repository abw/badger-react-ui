import Checkbox from '@/components/Checkbox/Checkbox'
import Icon from '@/components/Icon/Icon'
import { SortableItemProps } from '@/components/Sortable'
import { DataTableSortColumnExtraProps, DataTableSortItem } from '../types'

const DataTableColumn = ({
  item,
  setNodeRef,
  style,
  listeners,
  toggleVisibleColumn,
  isVisible,
  ...props
}: SortableItemProps<DataTableSortItem> & DataTableSortColumnExtraProps) =>
  <div
    ref={setNodeRef} style={style}
    className={`sortable item flex middle outline pad-v-none pad-h-1 border mar-b-2 ${item.moved ? 'moved' : ''}`}
    {...props}
  >
    <Checkbox
      className="fluid flex middle no-focus"
      key={item.id}
      checked={isVisible[item.id]|| false}
      onChange={() => toggleVisibleColumn(String(item.id))}
      text={item.heading}
    />
    <div
      {...listeners}
      className="pad-h-2"
    >
      <Icon name="drag" className="drag-handle"/>
    </div>
  </div>

export default DataTableColumn