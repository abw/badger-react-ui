import React              from 'react'
import Context            from './Context.js'
import DropdownItem       from './Item.jsx'
import DropdownSeparator  from './Separator.jsx'
import { hasValue }       from '@abw/badger-utils'

const Menu = ({
  items=[],
  menuRef,
  menuClass='menu border bdr-1',
  cursor,
  selectItem,
  setCursor,
  onMouseEnter,
  onMouseLeave,
  Item=DropdownItem,
  Separator=DropdownSeparator,
}) =>
  <div
    className={menuClass} ref={menuRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    { items.map(
      (item, n) =>
        item.separator
          ? <Separator
              key={n}
              {...item}
            />
          : <Item
              key={n}
              active={hasValue(cursor) && items[cursor] === item}
              onClick={() => selectItem(item)}
              onMouseEnter={() => setCursor(n)}
              {...item}
            />
    )}
  </div>


export default Context.Consumer(Menu)