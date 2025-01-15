import React from 'react'
import { Range } from '@/src/index'

const RangeExample = () =>
  /* START */
  <Range
    minValue={25}
    maxValue={75}
    showValues
    displayValue={value => `${value}%`}
  />
  /* END */

export default RangeExample