import React from 'react'
import { RangeMax } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMax
      value={30}
      showInput
    />
    <RangeMax
      value={40}
      showInput
      inputSize="smaller"
    />
    <RangeMax
      value={50}
      showInput
      inputSize="large"
    />
    {/* END */}
  </div>

export default RangeExample