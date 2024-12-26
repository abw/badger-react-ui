export const rangeMinNormalClick = (normal, minNormal, maxNormal, setMin) =>
  setMin(normal)

export const rangeMinPrepareRenderProps = props => {
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