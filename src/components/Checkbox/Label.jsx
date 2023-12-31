import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { classes } from '@/src/utils/classes.js'

const CheckboxLabel = ({
  className,
  disabled,
  children,
  ref,
}) =>
  <label
    className={classes(className, { disabled })}
    ref={ref}
  >
    {children}
  </label>

export default Themed(CheckboxLabel, 'CheckboxLabel')

