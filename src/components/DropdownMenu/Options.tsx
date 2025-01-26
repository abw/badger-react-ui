import Context            from './Context'
import DropdownOption     from './Option'
import DropdownSeparator  from './Separator'
import DropdownHeading    from './Heading'
import { hasValue, isObject } from '@abw/badger-utils'

export const DropdownMenuOptions = Context.Consumer(
  ({
    options=[],
    cursor,
    selected,
    selectOption,
    setCursor,
    Option=DropdownOption,
    Separator=DropdownSeparator,
    Heading=DropdownHeading,
  }) =>
    options.map(
      (option, n) => {
        let k: string | number = n
        if (isObject(option)) {
          k = String(option.id ?? option.value ?? n)
          if (option.separator) {
            return <Separator option={option} key={k}/>
          }
          if (option.heading) {
            return <Heading option={option} key={k}/>
          }
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
    )
)

export default DropdownMenuOptions

