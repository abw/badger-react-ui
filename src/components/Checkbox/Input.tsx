import { doNothing } from '@abw/badger-utils'
import { classes } from '@/src/utils/classes'
import { CheckboxInputProps } from './types'

const CheckboxInput = ({
  disabled=false,
  tabIndex=0,
  onChange=doNothing,
  inputClass,
  round,
  square,
  switch: asSwitch,
  inputRef,
  ...props
}: CheckboxInputProps) =>
  <input
    type="checkbox"
    ref={inputRef}
    aria-disabled={disabled}
    tabIndex={disabled ? -1 : tabIndex}
    onChange={e => onChange(e.target.checked)}
    className={classes(inputClass, { round, square })}
    role={asSwitch ? 'switch' : undefined}
    {...props}
  />

export default CheckboxInput

