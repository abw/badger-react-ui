import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <RangeMinMax
    maxValue={50}
    step={5}
    showTicks
  />
  /* END */

export default RangeExample