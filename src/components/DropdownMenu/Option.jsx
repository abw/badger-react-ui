import React       from 'react'
import Context     from './Context.js'
import { classes } from '@/src/utils/classes'

const Option = ({
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
  // ...props
}) =>
  <div
    className={
      classes(
        optionClass,
        option.className,
        option.indent ? `indent-${option.indent}` : null,
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