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
      value={40}
      showInput
      inputSize="smaller"
    />
    <RangeMin
      value={50}
      showInput
      inputSize="large"
    />
    {/* END */}
  </div>

export default RangeExample