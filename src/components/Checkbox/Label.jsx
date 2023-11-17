import React from 'react'
import { Themed } from '@/src/Theme.jsx'

const CheckboxLabel = ({
  className,
  children,
  ref,
}) =>
  <label className={className} ref={ref}>
    {children}
  </label>

export default Themed(CheckboxLabel, 'CheckboxLabel')

