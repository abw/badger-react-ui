import React from 'react'
import Context from './Context.js'
import { range } from '@abw/badger-utils'

const Ticks = ({
  ticksClass='range-ticks',
  tickClass='range-tick',
  steps
}) =>
  <div
    className={ticksClass}
    style={{ '--steps': steps }}
  >
    { range(0, steps).map(
      n =>
        <div className={tickClass} key={n}></div>
    )}
  </div>

export const RangeTicks = Context.Consumer(Ticks)
export default RangeTicks
