import React       from 'react'
import Context     from './Context.js'
import { classes } from '@/src/utils/classes.js'

const Option = ({
  option,
  active,
  activeRef,
  selected,
  onClick,
  onMouseEnter,
  displayOption,
  optionClass='item no-hover',
  activeClass='active',
  selectedClass='selected',
  disabledClass='disabled',
}) =>
  <div
    className={
      classes(
        optionClass,
        option.className,
        active   ? activeClass   : null,
        selected ? selectedClass : null,
        option.disabled ? disabledClass : null
      )
    }
    onMouseEnter={onMouseEnter}
    onClick={onClick}
    ref={active ? activeRef : null}
    aria-disabled={option.disabled}
  >
    {displayOption(option)}
  </div>

export default Context.Consumer(Option)
