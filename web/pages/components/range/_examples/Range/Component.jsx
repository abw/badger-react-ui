import { Range } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Range } from '@abw/badger-react-ui

const RangeExamples = () =>
  <div className="grid-1 gap-2">
    <Range/>
    <Range min={100} max={200} value={150} round={-1} showOutput/>
  </div>

export default RangeExamples