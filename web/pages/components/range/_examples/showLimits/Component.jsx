import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      minValue={20}
      maxValue={40}
      showLimits
    />
    <Range
      minValue={40}
      maxValue={60}
      showLimits
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample