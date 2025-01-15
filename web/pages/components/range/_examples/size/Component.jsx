import React from 'react'
import { Range } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      size="smallest"
      minValue={10} maxValue={30}
    />
    <Range
      size="smaller"
      minValue={20} maxValue={40}
    />
    <Range
      size="small"
      minValue={30} maxValue={50}
    />
    <Range
      size="medium"
      minValue={40} maxValue={60}
    />
    <Range
      size="large"
      minValue={50} maxValue={70}
    />
    <Range
      size="larger"
      minValue={60} maxValue={80}
    />
    <Range
      size="largest"
      minValue={70} maxValue={90}
    />
    {/* END */}
  </div>

export default RangeExample