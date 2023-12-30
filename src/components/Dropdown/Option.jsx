import React       from 'react'
import Context     from './Context.js'
import WithIcons   from '../Icon/WithIcons.jsx'
import { classes } from '@/src/utils/classes.js'

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
  // displayOption,
  // ...props
}) =>
  <div
    className={
      classes(
        optionClass,
        option.className,
        active   ? activeClass   : null,
        selected ? selectedClass : null
      )
    }
    onMouseEnter={onMouseEnter}
    onClick={onClick}
    ref={active ? activeRef : null}
  >
    <WithIcons {...option}/>
  </div>


export default Context.Consumer(Option)