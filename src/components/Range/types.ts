import { CSSProperties } from 'react'
import { SelectProps } from '../Select/types'
import { ContextConstructorProps, ContextProps, RenderChildren } from '@abw/react-context'

export type RangeProps = ContextProps<{
  value?: number | [number, number] | { min: number, max: number }
  min?: number | string
  max?: number | string
  minValue?: number
  maxValue?: number
  minRange?: number
  maxRange?: number
  minNormal?: number
  maxNormal?: number
  step?: RangeStep | string
  options?: RangeOption[]
  tickStep?: number | 'any'
  dragTimeout?: number

  disabled?: boolean
  color?: string
  size?: string

  showTicks?: boolean
  showInput?: boolean
  showInputs?: boolean
  showValue?: boolean
  showValues?: boolean
  showScale?: boolean
  showLimits?: boolean

  scaleSize?: string
  inputSize?: string
  inputsSize?: string
  valueSize?: string
  valuesSize?: string

  stepDownIcon?: string
  stepUpIcon?: string

  className?: string
  rangeClass?: string
  draggingClass?: string
  hasScaleClass?: string

  disabledClass?: string
  inputClass?: string
  inputsClass?: string
  inputInputsClass?: string
  inputPrefixClass?: string
  inputSuffixClass?: string
  limitsClass?: string
  minClass?: string
  maxClass?: string
  outputClass?: string
  scaleValueClass?: string
  selectionClass?: string
  sliderClass?: string
  stepClass?: string
  thumbClass?: string
  thumbsClass?: string
  tickClass?: string
  ticksClass?: string
  trackClass?: string
  valuesClass?: string
  valueClass?: string

  alignValue?: RangeAlignInputs
  alignValues?: RangeAlignInputs
  alignMinValue?: RangeAlignInputs
  alignMaxValue?: RangeAlignInputs
  alignInput?: RangeAlignInputs
  alignInputs?: RangeAlignInputs

  quantize?: RangeQuantize
  normalClick?: RangeNormalClick
  displayValue?: RangeDisplayValueFromOptions
  prepareRenderProps?: RangeRenderPropsPrepare
  selectOptions?: SelectProps

  onChange?: RangeOnChangeHandler
  onChangeValue?: RangeOnChangeHandler

  Debug?: RangeDebugType
  Input?: RangeInputType
  InputMin?: RangeInputMinType
  InputMax?: RangeInputMaxType
  Inputs?: RangeInputsType
  Layout?: RangeLayoutType
  Limits?: RangeLimitsType
  Output?: RangeOutputType
  Selection?: RangeSelectionType
  Slider?: RangeSliderType
  ThumbMax?: RangeThumbMaxType
  ThumbMin?: RangeThumbMinType
  Thumbs?: RangeThumbsType
  Ticks?: RangeTicksType
  Track?: RangeTrackType
  ValueMax?: RangeValueMaxType
  ValueMin?: RangeValueMinType
  Values?: RangeValuesType
}>

export type RangeState = {
  dragging?: RangeDragging
  min: number
  max: number
  range: number
  minValue: number
  maxValue: number
  minRange: number
  maxRange: number
  minInput: number
  maxInput: number
  minNormal: number
  maxNormal: number
  minPercent: number
  maxPercent: number
  options?: RangeOption[]
  step: RangeStep
  steps: number | null
  tickStep: RangeStep,
  tickSteps: number | null
  displayValue: RangeDisplayValueFromOptions
}

export type RangeActions = {
  setValues: (min: number, max: number) => void
  setMinValue: (min: number) => void
  setMaxValue: (max: number) => void
  setMinInput: (min: number) => void
  setMaxInput: (max: number) => void
  stepMinUp: () => void
  stepMaxUp: () => void
  stepMinDown: () => void
  stepMaxDown: () => void
  onClick: React.MouseEventHandler
  onDragMin: React.PointerEventHandler
  onDragMax: React.PointerEventHandler
  onKeyDownMin: React.KeyboardEventHandler
  onKeyDownMax: React.KeyboardEventHandler
  thumbsRef: (ref: HTMLElement | null) => void
  trackRef:  (ref: HTMLElement | null) => void
  // This isn't an action but is added in by getRenderProps()
  normalToValue: (normal: number) => number
  rangeProps?: {
    className: string
    style: CSSProperties
  }
}

export type RangeRenderProps = RangeProps & RangeState & RangeActions
export type RangeRenderPropsPrepare = (props: RangeRenderProps) => RangeRenderProps
export type RangeConstructorProps = ContextConstructorProps<
  RangeProps, RangeState, RangeActions
>

export type RangeOption = string | number

export type RangeDisplayValueFromOptions = (
  value: number,
  options?: Array<string | number>
) => string | number

export type RangeStep = number | 'any'

export type RangeQuantize = (value: number) => number

export type RangeQuantizer = (
  value: number,
  clampMin?: number,
  clampMax?: number
) => number

export type RangeQuantizerFactory = (
  props: RangeQuantizerFactoryProps
) => RangeQuantizer

export type RangeQuantizerFactoryProps = {
  min: number,
  max: number,
  step: RangeStep,
  quantize?: RangeQuantize
}

export type RangeSetMin = (min: number) => void
export type RangeSetMax = (max: number) => void
export type RangeNormalClick = (
  normal: number,
  minNormal: number,
  maxNormal: number,
  setMin: RangeSetMin,
  setMax: RangeSetMax
) => void

export type RangeNormalToValue = (normal: number) => number
export type RangeValueToNormal = (
  value: number,
  clampMin?: number,
  clampMax?: number
) => number

export type RangeAlignInputs = 'space' | 'center' | 'left' | 'right'
export type RangeAligner = Record<string, string> & {
  space: string
}

export type RangeDragging = {
  control: string
  initialX: number,
  thumbLeft: number,
  thumbMid: number,
  thumbOffset: number,
  thumbsLeft: number
  thumbsWidth: number
  thumbPos: number
  // control
}

export type RangeContentProps = RenderChildren<RangeRenderProps>

export type RangeInputProps = {
  stepUp?: () => void
  stepDown?: () => void
  input: number
  setInput: (input: number) => void
}

export type RangeSelectOption = {
  value: number
  text: string
}

export type RangeOnChangeHandler = (
  minValue: number,
  maxValue: number,
  state: RangeState
) => void

export type RangeEventListeners = Record<string, EventListener[]>

export type RangeDebugType = React.FC
export type RangeInputType = React.FC
export type RangeInputMinType = React.FC
export type RangeInputMaxType = React.FC
export type RangeInputsType = React.FC
export type RangeLayoutType = React.FC
export type RangeLimitsType = React.FC
export type RangeSelectType = React.FC
export type RangeSelectionType = React.FC
export type RangeSliderType = React.FC
export type RangeThumbMaxType = React.FC
export type RangeThumbMinType = React.FC
export type RangeThumbsType = React.FC
export type RangeTicksType = React.FC
export type RangeTrackType = React.FC
export type RangeOutputType = React.FC
export type RangeValueMaxType = React.FC
export type RangeValueMinType = React.FC
export type RangeValuesType = React.FC
