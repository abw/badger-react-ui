import React from 'react'
import Context from './Context.js'
import Icon from '../Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'

const InputMin = ({
  inputClass='range-input field',
  hasScaleClass='range-has-scale',
  showTicks,
  showScale,
  inLimits,
  min,
  max,
  step,
  minInput,
  setMinInput,
  stepMinUp,
  stepMinDown,
  minValue
}) =>
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
        className={`prefix shaded lined ${minValue > min ? 'clickable' : 'disabled'}`}
        onClick={minValue > min ? stepMinDown : null}
      >
        <Icon name="minus"/>
      </div>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={minInput}
        className="inline"
        onChange={e => setMinInput(e.target.value)}
      />
      <div
        className={`suffix shaded lined ${minValue < max ? 'clickable' : 'disabled'}`}
        onClick={minValue < max ? stepMinUp : null}
      >
        <Icon name="plus"/>
      </div>
    </div>
  </div>

export const RangeMinMaxInputMin = Context.Consumer(InputMin)
export default RangeMinMaxInputMin
