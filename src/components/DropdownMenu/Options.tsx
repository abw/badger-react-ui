import Context            from './Context'
import DropdownOption     from './Option'
import DropdownSeparator  from './Separator'
import DropdownHeading    from './Heading'
import { mergeRefs }      from '@/src/utils/refs'
import { hasValue, isObject } from '@abw/badger-utils'
import { DropdownMenuOptionsProps } from './types'

export const DropdownMenuOptions = Context.Consumer<
  DropdownMenuOptionsProps
>(
  ({
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
        (option, n) => {
          let k: string | number = n
          if (isObject(option)) {
            if (option.separator) {
              return <Separator option={option}/>
            }
            if (option.heading) {
              return <Heading option={option}/>
            }
            k = String(option.id ?? option.value ?? n)
          }
          return (
            <Option
              key={k}
              option={option}
              active={hasValue(cursor) && options[cursor] === option}
              selected={selected === option}
              onClick={() => selectOption(option)}
              onMouseEnter={() => setCursor(n)}
            />
          )
        }
      )}
    </div>
)

export default DropdownMenuOptions

