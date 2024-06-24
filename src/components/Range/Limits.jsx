import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'

const Limits = ({
  limitsClass='range-limits',
  limitClass='range-limit',
  Input=DefaultInput,
  showInput,
  min,
  max
}) =>
  <div className={limitsClass}>
    <div className={limitClass}>
      {min}
    </div>
    { Boolean(showInput) &&
      <Input/>
    }
    <div className={limitClass}>
      {max}
    </div>
  </div>

export const RangeLimits = Context.Consumer(Limits)
export default RangeLimits
