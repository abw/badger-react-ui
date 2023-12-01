import React       from 'react'
import Context     from './Context.js'
import { classes } from '@/src/utils/classes.js'

const SelectOption = ({
  option,
  active,
  activeRef,
  onClick,
  onMouseEnter,
  displayOption,
  optionClass='option',
  activeClass='active'
}) =>
  <div
    className={classes(optionClass, { [activeClass]: active })}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    ref={active ? activeRef : null}
  >
    {displayOption(option)}
  </div>

export default Context.Consumer(SelectOption)
