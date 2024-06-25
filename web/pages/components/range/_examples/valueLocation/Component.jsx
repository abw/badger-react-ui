import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      showValue
    />
    <Range
      showValue
      valueLocation="left"
    />
    <Range
      showValue
      valueLocation="center"
    />
    <Range
      showValue
      valueLocation="right"
    />
    {/* END */}
  </div>

export default RangeExample