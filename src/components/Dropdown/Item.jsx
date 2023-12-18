import { classes } from '@/src/utils/classes.js'
import React              from 'react'

const Item = ({
  text,
  itemRef,
  itemClass='item no-hover',
  onMouseEnter,
  active,
}) =>
  <div
    className={classes(itemClass, { active })}
    onMouseEnter={onMouseEnter}
    ref={itemRef}
  >
    {text}
  </div>


export default Item