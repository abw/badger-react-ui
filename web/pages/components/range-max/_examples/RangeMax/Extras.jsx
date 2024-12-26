import React from 'react'
import { RangeMax } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <RangeMax
    value={150}
    min={100} max={200} step={10}
    showValue showTicks showScale showInput
  />
  /* END */

export default RangeExample