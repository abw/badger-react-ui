import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range size="smallest"/>
    <Range size="smaller"/>
    <Range size="small"/>
    <Range size="medium"/>
    <Range size="large"/>
    <Range size="larger"/>
    <Range size="largest"/>
    {/* END */}
  </div>

export default RangeExample