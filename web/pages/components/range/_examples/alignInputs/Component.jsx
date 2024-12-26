import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      minValue={10} maxValue={30}
      showInputs
    />
    <Range
      minValue={20} maxValue={40}
      showInputs
      alignInputs="center"
    />
    <Range
      minValue={30} maxValue={50}
      showInputs
      alignInputs="left"
    />
    <Range
      minValue={40} maxValue={60}
      showInputs
      alignInputs="right"
    />
    {/* END */}
  </div>

export default RangeExample