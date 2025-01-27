import Context          from './Context'
import { optionValue } from '@/src/utils/option'
import { hasValue, isArray } from '@abw/badger-utils'
import SelectItem from './Item'
import SelectNoOptions from './NoOptions'

export const SelectMenu = Context.Consumer(
  ({
    options,
    menuRef,
    menuClass,
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
