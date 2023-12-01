import { range } from '@abw/badger-utils'
import React from 'react'

export const stops = range(0, 100, 5)

const StopSelect = ({
  name,
  stop,
  setStop,
  disabled=false
}) =>
  <select
    name={name}
    required
    value={stop}
    onChange={ e => setStop(e.target.value) }
    disabled={disabled}
  >
    <option value="" hidden disabled selected>Select Stop</option>
    <option value="">None</option>
    { stops.map(
      s =>
        <option
          key={s}
          value={s}
        >
          {s}
        </option>
    )}
  </select>

export default StopSelect