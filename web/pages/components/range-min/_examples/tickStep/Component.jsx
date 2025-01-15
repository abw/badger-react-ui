import React from 'react'
import { RangeMin } from '@/src/index'

const RangeExample = () =>
  /* START */
  <RangeMin
    value={50}
    step={10}
    tickStep={20}
    showTicks
    showValue
  />
  /* END */

export default RangeExample