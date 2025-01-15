import React from 'react'
import { RangeMax } from '@/src/index'

const RangeMaxExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMax
      value={20}
      showValue
    />
    <RangeMax
      value={40}
      showValue
      alignValue="left"
    />
    <RangeMax
      value={60}
      showValue
      alignValue="center"
    />
    <RangeMax
      value={80}
      showValue
      alignValue="right"
    />
    {/* END */}
  </div>

export default RangeMaxExample