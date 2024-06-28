import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      minValue={25} maxValue={75}
      showValues
    />
    <RangeMinMax
      minValue={25} maxValue={75}
      showValues
      alignValues="space"
    />
    <RangeMinMax
      minValue={25} maxValue={75}
      showValues
      alignMinValue="left"
    />
    <RangeMinMax
      minValue={25} maxValue={75}
      showValues
      alignMaxValue="right"
    />
    {/* END */}
  </div>

export default RangeExample