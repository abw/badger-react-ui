import Context from './Context'
import { classes } from '@/src/utils/classes'
import { DropdownMenuOptionProps } from './types'
import { isObject } from '@abw/badger-utils'
import { maybeObjectOptionClasses } from './Utils'

export const DropdownMenuOption = Context.Consumer<
  DropdownMenuOptionProps
>(
  ({
    option,
    active,
    activeRef,
    selected,
    onClick,
    onMouseEnter,
    optionClass='item no-hover',
    activeClass='active',
    selectedClass='selected',
    disabledClass='disabled',
    displayOption,
  }) =>
    <div
      className={
        classes(
          optionClass,
          active   ? activeClass   : null,
          selected ? selectedClass : null,
          ...maybeObjectOptionClasses(
            option,
            { disabled: disabledClass }
          ),
        )
      }
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      aria-disabled={isObject(option) ? option.disabled : undefined}
      ref={ active ? activeRef : null }
    >
      {displayOption(option)}
    </div>
)

export default DropdownMenuOption