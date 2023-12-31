import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { doNothing } from '@abw/badger-utils'

const Input = ({
  option,
  tabIndex=0,
  onChange=doNothing,
  checked
}) =>
  <input
    type="radio"
    disabled={option.disabled}
    aria-disabled={option.disabled}
    tabIndex={option.disabled ? -1 : tabIndex}
    onChange={e => onChange(e.target.checked)}
    checked={checked}
  />

export default Themed(Input, 'RadioInput')

