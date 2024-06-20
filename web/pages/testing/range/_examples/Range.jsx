import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-2">
    <div className="Xborder">
      <Range/>
      <Range value={25} round/>
      <Range min={100} max={200} value={150} round={-1}/>
      <Range min={10} max={11} value={10.75} round={2}/>
      <Range value="100"/>
    </div>
  </div>

export default RangeExample