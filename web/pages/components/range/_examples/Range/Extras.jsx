import React from 'react'
import { Range } from '@/src/index'

const RangeExample = () =>
  /* START */
  <Range
    value={150}
    minValue={130}
    maxValue={170}
    min={100} max={200} step={10}
    minRange={20} maxRange={70}
    showValues showTicks showScale showInputs
  />
  /* END */

export default RangeExample