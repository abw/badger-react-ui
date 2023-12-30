import { classes } from '@/src/utils/classes.js'
import React              from 'react'
import WithIcons from '../Icon/WithIcons.jsx'

const Option = ({
  optionRef,
  optionClass='item no-hover',
  className,
  onMouseEnter,
  onClick,
  active,
  selected,
  // displayOption,
  ...props
}) =>
  <div
    className={classes(optionClass, className, { active, selected })}
    onMouseEnter={onMouseEnter}
    onClick={onClick}
    ref={optionRef}
  >
    <WithIcons {...props}/>
  </div>


export default Option