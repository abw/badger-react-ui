import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      step={20}
      showTicks
      showScale
    />
    <RangeMinMax
      step={20}
      showTicks
      showScale
      showValue
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample