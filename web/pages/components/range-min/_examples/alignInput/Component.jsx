import React from 'react'
import { RangeMin } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMin
      value={30}
      showInput
    />
    <RangeMin
      value={50}
      showInput
      alignInput="left"
    />
    <RangeMin
      value={70}
      showInput
      alignInput="right"
    />
    {/* END */}
  </div>

export default RangeExample