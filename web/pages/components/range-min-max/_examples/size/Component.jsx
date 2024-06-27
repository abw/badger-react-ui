import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax size="smallest"/>
    <RangeMinMax size="smaller"/>
    <RangeMinMax size="small"/>
    <RangeMinMax size="medium"/>
    <RangeMinMax size="large"/>
    <RangeMinMax size="larger"/>
    <RangeMinMax size="largest"/>
    {/* END */}
  </div>

export default RangeExample