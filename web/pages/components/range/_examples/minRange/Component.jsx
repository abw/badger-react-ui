import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    minValue={50}
    maxValue={70}
    minRange={11}
    showValues
    showLimits
  />
  /* END */

export default RangeExample