import React            from 'react'
import Context          from './Context.js'
// import SelectOption     from './Option.jsx'
import SelectItem       from './Item.jsx'
import SelectNoOptions  from './NoOptions.jsx'
import { hasValue, isArray } from '@abw/badger-utils'

const Menu = ({
  options,
  menuRef,
  menuClass='menu border bdr-1',
  cursor,
  selected,
  selectOption,
  setCursor,
  // Option=SelectOption,
  Item=SelectItem,
  NoOptions=SelectNoOptions,
}) =>
  <div
    className={menuClass}
    ref={menuRef}
  >
    { (isArray(options) && options.length)
      ? options.map(
        (option, n) =>
          <Item
            key={option.id ?? option.value ?? n}
            option={option}
            active={hasValue(cursor) && options[cursor] === option}
            selected={selected === option}
            onClick={() => selectOption(option)}
            onMouseEnter={() => setCursor(n)}
          />
      )
      : <NoOptions/>
    }
  </div>

export const SelectMenu = Context.Consumer(Menu)
export default SelectMenu
