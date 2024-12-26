import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      minValue={40}
      step={20}
      showTicks
      showScale
    />
    <Range
      maxValue={60}
      step={20}
      showTicks
      showScale
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample