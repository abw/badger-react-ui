import Context from './Context'
import { classes } from '@/src/utils/classes'
import { SelectOptionProps } from './types'
import { SELECT_OPTION_CLASS } from './Constants'
import { ACTIVE_CLASS, DISABLED_CLASS, SELECTED_CLASS } from '@/src/constants'

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
    optionClass=SELECT_OPTION_CLASS,
    activeClass=ACTIVE_CLASS,
    selectedClass=SELECTED_CLASS,
    disabledClass=DISABLED_CLASS,
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
