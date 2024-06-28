import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    minValue={25}
    maxValue={75}
    maxRange={50}
    showValues
    showLimits
  />
  /* END */

export default RangeExample