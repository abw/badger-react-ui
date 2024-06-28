import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      size="smallest"
      minValue={10} maxValue={30}
    />
    <RangeMinMax
      size="smaller"
      minValue={20} maxValue={40}
    />
    <RangeMinMax
      size="small"
      minValue={30} maxValue={50}
    />
    <RangeMinMax
      size="medium"
      minValue={40} maxValue={60}
    />
    <RangeMinMax
      size="large"
      minValue={50} maxValue={70}
    />
    <RangeMinMax
      size="larger"
      minValue={60} maxValue={80}
    />
    <RangeMinMax
      size="largest"
      minValue={70} maxValue={90}
    />
    {/* END */}
  </div>

export default RangeExample