import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeMinMaxExample = () =>
  /* START */
  <RangeMinMax
    value={150}
    minValue={120}
    maxValue={180}
    min={100} max={200} step={10}
    showValue showTicks showScale showInputs
  />
  /* END */

export default RangeMinMaxExample