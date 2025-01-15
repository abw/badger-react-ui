import React from 'react'
import { RangeMin } from '@/src/index'

const RangeExample = () =>
  /* START */
  <RangeMin
    value={150}
    min={100} max={200} step={10}
    showValue showTicks showScale showInput
  />
  /* END */

export default RangeExample