import React from 'react'
import { RangeMax } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMax
      value={40}
      step={20}
      showTicks
      showScale
    />
    <RangeMax
      value={60}
      step={20}
      showTicks
      showScale
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample