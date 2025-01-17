import { doNothing } from '@abw/badger-utils'
import { RadioInputType } from './types'

const RadioInput: RadioInputType = ({
  name,
  option,
  tabIndex=0,
  onChange=doNothing,
  checked
}) =>
  <input
    type="radio"
    name={name}
    disabled={option.disabled}
    aria-disabled={option.disabled}
    tabIndex={option.disabled ? -1 : tabIndex}
    onChange={e => onChange(e.target.checked)}
    checked={checked}
  />

export default RadioInput

