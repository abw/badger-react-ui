import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <RangeMinMax
    minValue={25}
    maxValue={75}
    showValues
    displayValue={value => `${value}%`}
  />
  /* END */

export default RangeExample