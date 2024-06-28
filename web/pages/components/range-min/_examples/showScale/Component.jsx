import React from 'react'
import { RangeMin } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMin
      value={40}
      step={20}
      showTicks
      showScale
    />
    <RangeMin
      value={60}
      step={20}
      showTicks
      showScale
      displayValue={ value => `${value}%` }
    />
    {/* END */}
  </div>

export default RangeExample