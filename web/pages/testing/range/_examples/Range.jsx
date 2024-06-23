import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-2 border">
    <Range debug/>
    <Range value={25} debug/>
    <Range min={100} max={200} value={150} step="10" debug/>
    <Range min={10} max={11} value={10.75} step="0.125" debug/>
    <Range value="100" debug/>
  </div>

export default RangeExample