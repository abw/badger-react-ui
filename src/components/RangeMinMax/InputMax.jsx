import React from 'react'
import Context from './Context.js'
import Icon from '../Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'

const InputMax = ({
  inputClass='range-input field',
  hasScaleClass='range-has-scale',
  showTicks,
  showScale,
  inLimits,
  min,
  max,
  step,
  minRange,
  maxRange,
  maxInput,
  setMaxInput,
  stepMaxUp,
  stepMaxDown,
  minValue,
  maxValue
}) => {
  const maxLimit = maxRange
    ? minValue + maxRange
    : max

  return (
    <div
      className={
        classes(
          inputClass,
          // nasty hack to push the input down when the scale is displayed
          (showTicks && showScale && ! inLimits) ? hasScaleClass : null
        )
      }
    >
      <div className="inputs inline">
        <div
          className={`prefix shaded lined ${maxValue > minValue + minRange ? 'clickable' : 'disabled'}`}
          onClick={maxValue > minValue + minRange ? stepMaxDown : null}
        >
          <Icon name="minus"/>
        </div>
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={maxInput}
          className="inline"
          onChange={e => setMaxInput(e.target.value)}
        />
        <div
          className={`suffix shaded lined ${maxValue < maxLimit ? 'clickable' : 'disabled'}`}
          onClick={maxValue < maxLimit ? stepMaxUp : null}
        >
          <Icon name="plus"/>
        </div>
      </div>
    </div>
  )
}

export const RangeMinMaxInputMax = Context.Consumer(InputMax)
export default RangeMinMaxInputMax
