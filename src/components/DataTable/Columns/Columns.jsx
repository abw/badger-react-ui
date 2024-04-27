import React    from 'react'
import Context  from '../Context.js'
import Dropdown from '@/components/Dropdown/Dropdown.jsx'
import Column   from './Column.jsx'
import Close    from './Close.jsx'
import VerticalSort from '@/components/Sortable/Vertical.jsx'
import { extract, splitHash } from '@abw/badger-utils'

const Columns = ({
  columns,
  visibleColumns,
  toggleVisibleColumn,
  columnOrder,
  columnsText='Columns',
  columnsHelpClick='Click checkbox to show/hide.',
  columnsHelpDrag='Drag handle to order.',
  changeColumnOrder
}) => {
  const isVisible = splitHash(visibleColumns)
  const items = columnOrder.map(
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

export const DataTableColumns = Context.Consumer(Columns)
export default DataTableColumns