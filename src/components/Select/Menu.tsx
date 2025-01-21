import Context          from './Context'
import SelectItem       from './Item.js'
import SelectNoOptions  from './NoOptions.js'
import { hasValue, isArray } from '@abw/badger-utils'
import { MENU_CLASS } from '@/src/constants'
import { optionValue } from '@/src/utils/option'

export const SelectMenu = Context.Consumer(
  ({
    options,
    menuRef,
    menuClass=MENU_CLASS,
    cursor,
    selected,
    selectOption,
    setCursor,
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
              key={String(optionValue(option) ?? n)}
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
)

export default SelectMenu
