import React from 'react'
import { Range } from '@/src/index'

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
      inputsSize="smaller"
    />
    <Range
      minValue={30} maxValue={50}
      showInputs
      inputsSize="large"
    />
    {/* END */}
  </div>

export default RangeExample