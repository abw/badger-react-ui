import Context  from '../Context'
import Dropdown from '@/components/Dropdown/Dropdown'
import Column   from './Column'
import Close    from './Close'
import VerticalSort from '@/components/Sortable/Vertical.jsx'
import { extract, splitHash } from '@abw/badger-utils'

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
    const isVisible = splitHash(visibleColumns)
    const items = columnOrder
      .filter( name => columns[name] )
      .map(
        id => extract(columns[id], 'id heading')
      )
    const setOrder = items => {
      changeColumnOrder(
        items.map( i => i.id )
      )
    }

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
            Item={Column}
            setOrder={setOrder}
            isVisible={isVisible}
            toggleVisibleColumn={toggleVisibleColumn}
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