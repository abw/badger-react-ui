import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeMinMaxExample = () =>
  /* START */
  <RangeMinMax
    value={150}
    minValue={130}
    maxValue={170}
    min={100} max={200} step={10}
    minRange={20} maxRange={70}
    showValues showTicks showScale showInputs
    // debug
  />
  /* END */

export default RangeMinMaxExample