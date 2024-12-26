import React from 'react'
import { RangeMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMax
      value={30}
      showInput
    />
    <RangeMax
      value={50}
      showInput
      alignInput="left"
    />
    <RangeMax
      value={70}
      showInput
      alignInput="right"
    />
    {/* END */}
  </div>

export default RangeExample