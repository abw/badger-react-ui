import React from 'react'
import { RangeMax } from '@/src/index.jsx'

const RangeMaxExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMax
      showValue
    />
    <RangeMax
      showValue
      valueLocation="left"
    />
    <RangeMax
      showValue
      valueLocation="center"
    />
    <RangeMax
      showValue
      valueLocation="right"
    />
    {/* END */}
  </div>

export default RangeMaxExample