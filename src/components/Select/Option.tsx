import Context from './Context'
import { classes } from '@/src/utils/classes'
import { SelectOptionProps } from './types'

export const SelectOption = Context.Consumer<
  SelectOptionProps
>(
  ({
    option,
    active,
    activeRef,
    selected,
    onClick,
    onMouseEnter,
    validOption,
    displayOption,
    optionClass,
    activeClass,
    selectedClass,
    disabledClass,
  }) =>
    <div
      className={
        classes(
          optionClass,
          option.className,
          option.indent ? `indent-${option.indent}` : null,
          active   ? activeClass   : null,
          selected ? selectedClass : null,
          validOption(option) ? null : disabledClass,
        )
      }
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      ref={active ? activeRef : null}
      aria-disabled={option.disabled}
    >
      {displayOption(option)}
    </div>
)

export default SelectOption
