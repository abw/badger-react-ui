import { RangeNormalClick, RangeRenderPropsPrepare } from '../Range/types'

export const rangeMaxNormalClick: RangeNormalClick = (
  normal,
  _minNormal,
  _maxNormal,
  _setMin,
  setMax
) =>
  setMax(normal)

export const rangeMaxPrepareRenderProps: RangeRenderPropsPrepare = props => {
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