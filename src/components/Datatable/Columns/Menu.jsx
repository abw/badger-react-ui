import React    from 'react'
import Context  from '../Context.js'
import { splitHash } from '@abw/badger-utils'

const Menu = ({
  columns,
  cursor,
  visibleColumns,
  toggleVisibleColumn,
  menuRef,
  menuClass='columns menu content border bdr-1',
  onMouseEnter,
  onMouseLeave,
}) => {
  const isVisible = splitHash(visibleColumns)
  return (
    <div
      className={menuClass}
      ref={menuRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      { Object.values(columns).map(
        column =>
          <div
            key={column.field} className="item"
            onClick={
              e => {
                toggleVisibleColumn(column.field)
                e.stopPropagation()
              }
            }
          >
            <input
              type="checkbox"
              className="no-focus"
              checked={isVisible[column.field]|| false}
              onClick={
                e => {
                  toggleVisibleColumn(column.field)
                  e.stopPropagation()
                }
              }
            />
            <span className="mar-l-2">
              {column.label}
            </span>
          </div>
      )}
    </div>
  )
}

export default Context.Consumer(Menu)