import React              from 'react'
import Context            from './Context.js'
import DropdownOption     from './Option.jsx'
import DropdownSeparator  from './Separator.jsx'
import { hasValue }       from '@abw/badger-utils'

const Menu = ({
  options=[],
  menuRef,
  menuClass='menu border bdr-1',
  cursor,
  selected,
  selectOption,
  setCursor,
  onMouseEnter,
  onMouseLeave,
  Option=DropdownOption,
  Separator=DropdownSeparator,
}) =>
  <div
    className={menuClass} ref={menuRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    { options.map(
      (option, n) =>
        option.separator
          ? <Separator
              key={n}
              {...option}
            />
          : <Option
              key={n}
              active={hasValue(cursor) && options[cursor] === option}
              selected={selected === option}
              onClick={() => selectOption(option)}
              onMouseEnter={() => setCursor(n)}
              className={option.className}
              {...option}
            />
    )}
  </div>


export default Context.Consumer(Menu)