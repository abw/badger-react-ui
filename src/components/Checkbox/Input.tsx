import { forwardRef } from 'react'
import { doNothing } from '@abw/badger-utils'
import { classes } from '@/src/utils/classes'
import { CheckboxInputProps } from './types'

const CheckboxInput = forwardRef<
  HTMLInputElement,
  CheckboxInputProps
>(
  (
    {
      disabled=false,
      tabIndex=0,
      onChange=doNothing,
      inputClass,
      round,
      square,
      switch: asSwitch,
      ...props
    },
    ref
  ) =>
    <input
      type="checkbox"
      ref={ref}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : tabIndex}
      onChange={e => onChange(e.target.checked)}
      className={classes(inputClass, { round, square })}
      role={asSwitch ? 'switch' : undefined}
      {...props}
    />
)

export default CheckboxInput

