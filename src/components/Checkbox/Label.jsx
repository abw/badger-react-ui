import React from 'react'
import { Themed } from '@/src/Theme'
import { classes } from '@/src/utils/classes'

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

