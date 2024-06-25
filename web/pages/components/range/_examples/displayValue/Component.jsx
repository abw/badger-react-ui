import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    showValue
    displayValue={value => `${value}%`}
  />
  /* END */

export default RangeExample