import React from 'react'
import { RangeMax } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <RangeMax
    showValue
    displayValue={value => `${value}%`}
  />
  /* END */

export default RangeExample