import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { classes } from '@/src/utils/classes.js'

const Label = ({
  className,
  disabled,
  children,
}) =>
  <label
    className={classes(className, { disabled })}
  >
    {children}
  </label>

export default Themed(Label, 'RadioLabel')

