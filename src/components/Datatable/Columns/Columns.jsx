import React    from 'react'
import Context  from '../Context.js'
import Dropdown from '@/components/Dropdown/Dropdown.jsx'
import Column   from './Column.jsx'
import Close    from './Close.jsx'
import VerticalSortExample from '@/components/Sortable/Vertical.jsx'
import { splitHash } from '@abw/badger-utils'

const Columns = ({
  columns,
  visibleColumns,
  toggleVisibleColumn,
  // setColumns,
}) => {
  const isVisible = splitHash(visibleColumns)
  const [items, setItems] = React.useState(
    Object.values(columns)
  )
  const setOrder = items => {
    setItems(items)
  }

  return (
    <Dropdown
      right
      iconRight="angle-down"
      text='Columns'
      size="small"
      closeOnBlur={false}
    >
      <div className="sortable list vertical">
        <VerticalSortExample
          items={items}
          Item={Column}
          setOrder={setOrder}
          isVisible={isVisible}
          toggleVisibleColumn={toggleVisibleColumn}
        />
      </div>
      {/*
      { Object.values(columns).map(
        column =>
          <Checkbox
            // border
            // inline
            className="fluid"
            key={column.field}
            checked={isVisible[column.field]|| false}
            onChange={() => toggleVisibleColumn(column.field)}
            text={column.label}
          />
      )}
      */}
      <Close/>
    </Dropdown>
  )
}

export const DatatableColumns = Context.Consumer(Columns)
export default DatatableColumns