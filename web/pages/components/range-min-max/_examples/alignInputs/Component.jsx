import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      minValue={10} maxValue={30}
      showInputs
    />
    <RangeMinMax
      minValue={20} maxValue={40}
      showInputs
      alignInputs="center"
    />
    <RangeMinMax
      minValue={30} maxValue={50}
      showInputs
      alignInputs="left"
    />
    <RangeMinMax
      minValue={40} maxValue={60}
      showInputs
      alignInputs="right"
    />
    {/* END */}
  </div>

export default RangeExample