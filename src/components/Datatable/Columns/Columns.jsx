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
  changeColumnOrder
}) => {
  const isVisible = splitHash(visibleColumns)
  const items = columnOrder.map(
    id => extract(columns[id], 'id label')
  )
  const setOrder = items => {
    changeColumnOrder(
      items.map( i => i.id )
    )
  }

  return (
    <Dropdown
      right
      iconRight="square vertical-left=2.5 vertical-right=2.5"
      text='Columns'
      size="small"
      closeOnBlur={false}
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
        Click checkbox to show/hide.<br/>
        Drag handle to order.
      </div>
      <Close/>
    </Dropdown>
  )
}

export const DatatableColumns = Context.Consumer(Columns)
export default DatatableColumns