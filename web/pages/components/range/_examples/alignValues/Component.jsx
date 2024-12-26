import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      minValue={25} maxValue={75}
      showValues
    />
    <Range
      minValue={25} maxValue={75}
      showValues
      alignValues="space"
    />
    <Range
      minValue={25} maxValue={75}
      showValues
      alignMinValue="left"
    />
    <Range
      minValue={25} maxValue={75}
      showValues
      alignMaxValue="right"
    />
    {/* END */}
  </div>

export default RangeExample