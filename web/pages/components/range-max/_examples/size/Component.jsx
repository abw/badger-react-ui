import React from 'react'
import { RangeMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMax
      size="smallest"
      value={30}
    />
    <RangeMax
      size="smaller"
      value={40}
    />
    <RangeMax
      size="small"
      value={50}
    />
    <RangeMax
      size="medium"
      value={60}
    />
    <RangeMax
      size="large"
      value={70}
    />
    <RangeMax
      size="larger"
      value={80}
    />
    <RangeMax
      size="largest"
      value={90}
    />
    {/* END */}
  </div>

export default RangeExample