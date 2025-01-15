import React from 'react'
import { Themed } from '@/src/Theme'
import { doNothing } from '@abw/badger-utils'
import { classes } from '@/src/utils/classes'

const CheckboxInput = ({
  disabled=false,
  tabIndex=0,
  onChange=doNothing,
  inputClass,
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
    className={classes(inputClass, { round, square })}
    role={asSwitch ? 'switch' : null}
    {...props}
  />

export default Themed(CheckboxInput, 'CheckboxInput')

