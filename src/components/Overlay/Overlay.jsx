import React from 'react'
import { Themed }   from '@/src/Theme.jsx'
import { classes } from '@/src/utils/classes.js'

export const Overlay = ({
  color,
  className,
  style,
  fixed,
  children
}) =>
  <div
    className={classes('overlay', className, color, { fixed })}
    style={style}
  >
    {children}
  </div>

export default Themed(Overlay, 'Overlay')
