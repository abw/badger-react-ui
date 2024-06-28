import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      step={20}
      showTicks
      showScale
    />
    <Range
      step={20}
      showTicks
      showScale
      showValue
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample