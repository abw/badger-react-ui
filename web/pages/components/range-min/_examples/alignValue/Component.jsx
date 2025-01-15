import React from 'react'
import { RangeMin } from '@/src/index'

const RangeMinExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMin
      value={20}
      showValue
    />
    <RangeMin
      value={40}
      showValue
      alignValue="left"
    />
    <RangeMin
      value={60}
      showValue
      alignValue="center"
    />
    <RangeMin
      value={80}
      showValue
      alignValue="right"
    />
    {/* END */}
  </div>

export default RangeMinExample