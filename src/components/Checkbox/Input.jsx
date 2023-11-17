import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { doNothing } from '@abw/badger-utils'

const CheckboxInput = ({
  disabled=false,
  tabIndex=0,
  onChange=doNothing,
  ref,
  ...props
}) =>
  <input
    type="checkbox"
    ref={ref}
    aria-disabled={disabled}
    tabIndex={disabled ? -1 : tabIndex}
    onChange={e => onChange(e.target.checked)}
    {...props}
  />

export default Themed(CheckboxInput, 'CheckboxInput')

