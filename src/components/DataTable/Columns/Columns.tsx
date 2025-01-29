import Context  from '../Context'
import Dropdown from '@/components/Dropdown/Dropdown'
import Column   from './Column'
import Close    from './Close'
import VerticalSort from '@/components/Sortable/Vertical'
import { extract, splitHash } from '@abw/badger-utils'
import { DataTableSortItem } from '../types'
import { SortableItemProps } from '../../Sortable'

export const DataTableColumns = Context.Consumer(
  ({
    columns,
    visibleColumns,
    toggleVisibleColumn,
    columnOrder=Object.keys(columns),
    columnsText='Columns',
    columnsHelpClick='Click checkbox to show/hide.',
    columnsHelpDrag='Drag handle to order.',
    changeColumnOrder
  }) => {
    const isVisible = splitHash(visibleColumns) as Record<string, boolean>
    const items: DataTableSortItem[] = columnOrder
      .filter( name => columns[name] )
      .map(
        id => extract(columns[id], 'id heading') as DataTableSortItem
      )
    const setOrder = (items: DataTableSortItem[]) => {
      changeColumnOrder(
        items.map( i => String(i.id) )
      )
    }
    const Item = (props: SortableItemProps<DataTableSortItem>) =>
      <Column
        {...props}
        isVisible={isVisible}
        toggleVisibleColumn={toggleVisibleColumn}
      />

    return (
      <Dropdown
        right
        iconRight="columns"
        text={columnsText}
        size="small"
        closeOnBlur={false}
        triggerClass="trigger pad-v-none"
      >
        <div className="sortable list vertical">
          <VerticalSort
            items={items}
            Item={Item}
            setOrder={setOrder}
            // More work needs to be done on Sortable to make these get
            // passed to Item without type errors.  Until then the workaround
            // is to define the custom Item component above which forwards the
            // isVisible and toggleVisibleColumn properties on.
            // isVisible={isVisible}
            // toggleVisibleColumn={toggleVisibleColumn}
          />
        </div>
        <div className="smaller mar-b-2">
          {columnsHelpClick}<br/>
          {columnsHelpDrag}
        </div>
        <Close/>
      </Dropdown>
    )
  }
)

export default DataTableColumns