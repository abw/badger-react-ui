import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    maxValue={50}
    step={10}
    tickStep={20}
    showTicks
    showValues
  />
  /* END */

export default RangeExample