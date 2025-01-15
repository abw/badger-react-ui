import React from 'react'
import { RangeMin } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMin
      size="smallest"
      value={30}
    />
    <RangeMin
      size="smaller"
      value={40}
    />
    <RangeMin
      size="small"
      value={50}
    />
    <RangeMin
      size="medium"
      value={60}
    />
    <RangeMin
      size="large"
      value={70}
    />
    <RangeMin
      size="larger"
      value={80}
    />
    <RangeMin
      size="largest"
      value={90}
    />
    {/* END */}
  </div>

export default RangeExample