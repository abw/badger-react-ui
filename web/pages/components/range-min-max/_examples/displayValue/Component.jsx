import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <RangeMinMax
    showValues
    displayValue={value => `${value}%`}
  />
  /* END */

export default RangeExample