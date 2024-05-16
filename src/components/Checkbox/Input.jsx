import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { doNothing } from '@abw/badger-utils'
import { classes } from '@/src/utils/classes.js'

const CheckboxInput = ({
  disabled=false,
  tabIndex=0,
  onChange=doNothing,
  className,
  round,
  square,
  ref,
  switch: asSwitch,
  ...props
}) =>
  <input
    type="checkbox"
    ref={ref}
    aria-disabled={disabled}
    tabIndex={disabled ? -1 : tabIndex}
    onChange={e => onChange(e.target.checked)}
    className={classes(className, { round, square })}
    role={asSwitch ? 'switch' : null}
    {...props}
  />

export default Themed(CheckboxInput, 'CheckboxInput')

