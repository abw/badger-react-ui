import { Generator, Context as Base } from '@abw/react-context'
import { anyPropsChanged, classes } from '@/src/utils/index.js'
import { doNothing, clamp, multiply, divide, identity, splitList } from '@abw/badger-utils'
import { ANY, ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from '@/src/constants.js'
import { initRangeMinMax } from './Utils.js'

const WATCH_PROPS = splitList(
  'min max minValue maxValue minRange maxRange step tickStep quantize'
)

class Context extends Base {
  static debug        = false
  static debugPrefix  = 'Range > '
  static debugColor   = 'rebeccapurple'
  static defaultProps = {
    onChange: doNothing,
    displayValue: identity,
    minNormal: 0,
    maxNormal: 1,
    color: 'brand'
  }
  static actions = [
    'trackRef', 'thumbsRef',
    'setMinValue', 'setMaxValue', 'setValues',
    'setMinInput', 'setMaxInput',
    'stepMinUp', 'stepMaxUp', 'stepMinDown', 'stepMaxDown',
    'onDragMin', 'onDragMax', 'onKeyDownMin', 'onKeyDownMax',
    'onClick',
  ]
  constructor(props) {
    super(props)
    const state = this.initProps(props)
    this.state = {
      ...this.state,
      ...state,
      minInput: state.minValue,
      maxInput: state.maxValue,
    }
  }
  initProps(props) {
    const { normalToValue, valueToNormal, quantize, ...state } = initRangeMinMax(props)
    this.quantize = quantize
    this.normalToValue = normalToValue
    this.valueToNormal = valueToNormal
    return state
  }
  componentDidUpdate(prevProps) {
    if (anyPropsChanged(WATCH_PROPS, this.props, prevProps)) {
      this.debug(`props have changed`)
      this.setState(
        this.initProps(this.props)
      )
    }
  }
  minValueLimits() {
    const { maxValue, min, max, minRange, maxRange } = this.state
    return [
      clamp(maxValue - maxRange, min, max),
      clamp(maxValue - minRange, min, max)
    ]
  }
  maxValueLimits() {
    const { minValue, min, max, minRange, maxRange } = this.state
    return [
      clamp(minValue + minRange, min, max),
      clamp(minValue + maxRange, min, max)
    ]
  }
  setMinInput(minInput) {
    this.setState(
      { minInput },
      () => this.setMinValue(minInput)
    )
  }
  setMaxInput(maxInput) {
    this.setState(
      { maxInput },
      () => this.setMaxValue(maxInput)
    )
  }
  setMinValue(minValue) {
    minValue = this.quantize(minValue, ...this.minValueLimits())
    const minNormal = this.valueToNormal(minValue)
    const minPercent = multiply(minNormal, 100)
    this.setState(
      {
        minNormal, minValue, minPercent
      },
      () => this.onChange()
    )
    return minValue
  }
  setMaxValue(maxValue) {
    maxValue = this.quantize(maxValue, ...this.maxValueLimits())
    const maxNormal = this.valueToNormal(maxValue)
    const maxPercent = multiply(maxNormal, 100)
    this.setState(
      {
        maxNormal, maxValue, maxPercent
      },
      () => this.onChange()
    )
    return maxValue
  }
  setValues(minValue, maxValue) {
    this.setMinValue(minValue)
    this.setMaxValue(maxValue)
  }
  setNormalisedMinValue(minNormal) {
    const minValue = clamp(
      this.normalToValue(minNormal),
      ...this.minValueLimits()
    )
    minNormal = this.valueToNormal(minValue)
    const minPercent = multiply(100, minNormal).toFixed(2)
    this.setState(
      {
        minNormal, minValue, minPercent, minInput: minValue
      },
      () => this.onChange()
    )
    return minValue
  }
  setNormalisedMaxValue(maxNormal) {
    const maxValue = clamp(
      this.normalToValue(maxNormal),
      ...this.maxValueLimits()
    )
    maxNormal = this.valueToNormal(maxValue)
    const maxPercent = multiply(100, maxNormal).toFixed(2)
    this.setState(
      {
        maxNormal, maxValue, maxPercent, maxInput: maxValue
      },
      () => this.onChange()
    )
    return maxValue
  }
  step() {
    const step = this.state.step
    return step === ANY
      ? 1
      : step
  }
  stepMinUp() {
    const newValue = this.state.minValue + this.step()
    // this.setMinValue(newValue)
    this.setMinInput(newValue)
  }
  stepMaxUp() {
    const newValue = this.state.maxValue + this.step()
    // this.setMaxValue(newValue)
    this.setMaxInput(newValue)
  }
  stepMinDown() {
    const newValue = this.state.minValue - this.step()
    // this.setMinValue(newValue)
    this.setMinInput(newValue)
  }
  stepMaxDown() {
    const newValue = this.state.maxValue - this.step()
    // this.setMaxValue(newValue)
    this.setMaxInput(newValue)
  }
  thumbsRef(ref){
    this._thumbsRef = ref
  }
  trackRef(ref){
    this._trackRef = ref
  }
  onKeyDown(event, down, up) {
    this.debug(`onKeyDown(${event.key})`)

    switch (event.key) {
      case ARROW_LEFT:
      case ARROW_DOWN:
        down()
        break

      case ARROW_RIGHT:
      case ARROW_UP:
        up()
        break

      default:
        this.debug(`ignored key ${event.key}`)
        return
    }
    event.preventDefault()
  }
  onKeyDownMin(event) {
    this.onKeyDown(
      event,
      () => this.stepMinDown(),
      () => this.stepMinUp(),
    )
  }
  onKeyDownMax(event) {
    this.onKeyDown(
      event,
      () => this.stepMaxDown(),
      () => this.stepMaxUp(),
    )
  }
  onDrag(e, name, set) {
    const thumb = e.target
    const { clientX } = e
    const { left: thumbLeft, width: thumbWidth } = thumb.getBoundingClientRect()
    const thumbMid = thumbLeft + (thumbWidth / 2)
    const thumbOffset = thumbLeft - clientX
    const thumbDrag = {
      initialX: clientX,
      thumbLeft,
      thumbMid,
      thumbOffset,
    }

    if (this._thumbsRef) {
      const { left: thumbsLeft, width: thumbsWidth } = this._thumbsRef.getBoundingClientRect()
      thumbDrag.thumbsLeft = thumbsLeft
      thumbDrag.thumbsWidth = thumbsWidth
      thumbDrag.thumbPos = (thumbMid - thumbsLeft) * 100 / thumbsWidth
    }
    this.debug('drag start: ', thumbDrag)
    this.setState({ [name]: thumbDrag })

    const mouseMove = e => {
      e.preventDefault()
      const offset = e.clientX - thumbDrag.initialX
      const newX = clamp(thumbDrag.thumbMid + offset - thumbDrag.thumbsLeft, 0, thumbDrag.thumbsWidth)
      this.debug(`drag`)
      set(
        divide(newX, thumbDrag.thumbsWidth)
      )
    }
    window.addEventListener(
      'pointermove',
      mouseMove
    )
    window.addEventListener(
      'pointerup',
      e => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ [name]: null })
        window.removeEventListener('pointermove', mouseMove)
      }
    )
  }
  onDragMin(e) {
    this.onDrag(
      e,
      'draggingMin',
      value => this.setNormalisedMinValue(value)
    )
  }
  onDragMax(e) {
    this.onDrag(
      e,
      'draggingMax',
      value => this.setNormalisedMaxValue(value)
    )
  }
  onClick(e) {
    const track = this._trackRef
    if (! track) {
      return
    }
    const { clientX: clickX } = e
    const { left: trackLeft, width: trackWidth } = this._trackRef.getBoundingClientRect()
    const normal = (clickX - trackLeft) / trackWidth
    const { minNormal, maxNormal } = this.state
    this.debug(`click at ${clickX} from ${trackLeft} with width ${trackWidth}: ${normal}`)

    if (normal < minNormal) {
      this.debug(`click below minimum`)
      return this.setNormalisedMinValue(normal)
    }
    else if (normal > maxNormal) {
      this.debug(`click above maximum`)
      return this.setNormalisedMaxValue(normal)
    }
    const dMin = normal - minNormal
    const dMax = maxNormal - normal
    if (dMin < dMax) {
      this.debug(`click between, closer to minimum`)
      return this.setNormalisedMinValue(normal)
    }
    else {
      this.debug(`click between, closer to maximum`)
      return this.setNormalisedMaxValue(normal)
    }
  }
  onChange() {
    const { minValue, maxValue } = this.state
    this.props.onChange(minValue, maxValue)
  }
  getRenderProps() {
    const context = this.getContext()
    const {
      minNormal, maxNormal, minPercent, maxPercent,
      className, rangeClass='range min-max', hasScaleClass='range-has-scale',
      showScale, color, size
    } = context
    context.quantize = this.quantize
    context.normalToValue = this.normalToValue
    context.rangeProps = {
      className: classes(
        rangeClass,
        className,
        color,
        size,
        { [hasScaleClass]: showScale }
      ),
      style: {
        '--min-position': minNormal,
        '--max-position': maxNormal,
        '--min-percent': `${minPercent}%`,
        '--max-percent': `${maxPercent}%`,
      }
    }
    return context
  }
}

export const RangeMinMaxContext = Generator(Context)
export const {
  Provider: RangeMinMaxProvider,
  Consumer: RangeMinMaxConsumer,
  Children: RangeMinMaxChildren,
  Use:      useRangeMinMax
} = RangeMinMaxContext
export default RangeMinMaxContext