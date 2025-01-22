/* eslint-disable @typescript-eslint/no-unused-vars */
import { RangeNormalClick, RangeRenderPropsPrepare } from '../Range/types'

export const rangeMinNormalClick: RangeNormalClick = (
  normal,
  _minNormal,
  _maxNormal,
  setMin,
  _setMax
) =>
  setMin(normal)

export const rangeMinPrepareRenderProps: RangeRenderPropsPrepare = props => {
  props.value     = props.maxValue
  props.input     = props.maxInput
  props.normal    = props.maxNormal
  props.percent   = props.maxPercent
  props.setValue  = props.setMaxValue
  props.setInput  = props.setMaxInput
  props.stepUp    = props.stepMaxUp
  props.stepDown  = props.stepMaxDown
  props.onDrag    = props.onDragMax
  props.onKeyDown = props.onKeyDownMax
  return props
}