import { classes } from '@/src/utils/classes.js'
import React              from 'react'
import WithIcons from '../Icon/WithIcons.jsx'

const Item = ({
  itemRef,
  itemClass='item no-hover',
  className,
  onMouseEnter,
  onClick,
  active,
  selected,
  ...props
}) =>
  <div
    className={classes(itemClass, className, { active, selected })}
    onMouseEnter={onMouseEnter}
    onClick={onClick}
    ref={itemRef}
  >
    <WithIcons {...props}/>
  </div>


export default Item