import React from 'react'
import { RangeMin } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMin
      value={40}
      showLimits
    />
    <RangeMin
      value={60}
      showLimits
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample