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
      inputsSize="smaller"
    />
    <RangeMinMax
      minValue={30} maxValue={50}
      showInputs
      inputsSize="large"
    />
    {/* END */}
  </div>

export default RangeExample