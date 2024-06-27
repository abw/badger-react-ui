import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      showValues
    />
    <RangeMinMax
      showValue
      valueLocations="limits"
    />
    {/* END */}
  </div>

export default RangeExample