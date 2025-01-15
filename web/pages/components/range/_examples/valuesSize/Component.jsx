import React from 'react'
import { Range } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      showValues
      valuesSize="smallest"
    />
    <Range
      showValues
      valuesSize="smaller"
    />
    <Range
      showValues
      valuesSize="small"
    />
    <Range
      showValues
      valuesSize="medium"
    />
    <Range
      showValues
      valuesSize="large"
    />
    <Range
      showValues
      valuesSize="larger"
    />
    <Range
      showValues
      valuesSize="largest"
    />
    {/* END */}
  </div>

export default RangeExample