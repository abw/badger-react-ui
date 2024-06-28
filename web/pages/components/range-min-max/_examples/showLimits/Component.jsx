import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      minValue={20}
      maxValue={40}
      showLimits
    />
    <RangeMinMax
      minValue={40}
      maxValue={60}
      showLimits
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample