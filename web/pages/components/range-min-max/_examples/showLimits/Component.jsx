import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      showLimits
    />
    <RangeMinMax
      showLimits
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample