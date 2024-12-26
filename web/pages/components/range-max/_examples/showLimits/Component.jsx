import React from 'react'
import { RangeMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMax
      value={40}
      showLimits
    />
    <RangeMax
      value={60}
      showLimits
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample