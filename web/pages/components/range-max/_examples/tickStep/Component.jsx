import React from 'react'
import { RangeMax } from '@/src/index'

const RangeExample = () =>
  /* START */
  <RangeMax
    value={50}
    step={10}
    tickStep={20}
    showTicks
    showValue
  />
  /* END */

export default RangeExample