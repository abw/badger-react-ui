import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <RangeMinMax
    maxValue={50}
    step={10}
    tickStep={20}
    showTicks
    showValue
  />
  /* END */

export default RangeExample