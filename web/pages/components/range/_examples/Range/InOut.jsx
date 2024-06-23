import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    value={150}
    min={100} max={200} step={10}
    showInput showOutput
  />
  /* END */

export default RangeExample