import Context from './Context'
import { classes } from '@/src/utils/classes'
import { SelectOptionProps } from './types'

export const SelectMenuOption = Context.Consumer<
  SelectOptionProps
>(
  ({
    option,
    optionObject,
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
          optionObject.className,
          optionObject.indent ? `indent-${optionObject.indent}` : null,
          active   ? activeClass   : null,
          selected ? selectedClass : null,
          validOption(option) ? null : disabledClass,
        )
      }
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      ref={active ? activeRef : null}
      aria-disabled={optionObject.disabled}
    >
      {displayOption(option)}
    </div>
)

export default SelectMenuOption
