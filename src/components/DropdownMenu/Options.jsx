import React              from 'react'
import Context            from './Context.js'
import DropdownOption     from './Option.jsx'
import DropdownSeparator  from './Separator.jsx'
import DropdownHeading    from './Heading.jsx'
import { mergeRefs }      from '@/src/utils/refs'
import { hasValue }       from '@abw/badger-utils'

const Options = ({
  options=[],
  menuClass='menu border bdr-1',
  menuRef,
  floatingRef,
  floatingStyle,
  cursor,
  selected,
  selectOption,
  setCursor,
  onMouseEnter,
  onMouseLeave,
  Option=DropdownOption,
  Separator=DropdownSeparator,
  Heading=DropdownHeading,
}) =>
  <div
    className={menuClass}
    ref={mergeRefs([menuRef, floatingRef])}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={floatingStyle}
  >
    { options.map(
      (option, n) =>
        option.separator
          ? <Separator
              key={n}
              option={option}
            />
          : option.heading
            ? <Heading
                key={n}
                option={option}
              />
            : <Option
                key={option.id ?? option.value ?? n}
                option={option}
                active={hasValue(cursor) && options[cursor] === option}
                selected={selected === option}
                onClick={() => selectOption(option)}
                onMouseEnter={() => setCursor(n)}
              />
    )}
  </div>


export default Context.Consumer(Options)