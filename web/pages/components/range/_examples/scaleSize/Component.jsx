import React from 'react'
import { Range } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      step={20} showTicks showScale
      scaleSize="smallest"
    />
    <Range
      step={20} showTicks showScale
      scaleSize="smaller"
    />
    <Range
      step={20} showTicks showScale
      scaleSize="small"
    />
    <Range
      step={20} showTicks showScale
      scaleSize="medium"
    />
    <Range
      step={20} showTicks showScale
      scaleSize="large"
    />
    <Range
      step={20} showTicks showScale
      scaleSize="larger"
    />
    <Range
      step={20} showTicks showScale
      scaleSize="largest"
    />
    {/* END */}
  </div>

export default RangeExample