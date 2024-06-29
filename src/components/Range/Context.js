import { Generator, Context as Base } from '@abw/react-context'
import { anyPropsChanged, classes } from '@/src/utils/index.js'
import { doNothing, clamp, multiply, divide, identity, splitList } from '@abw/badger-utils'
import { ANY, ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from '@/src/constants.js'
import { initRange, rangeNormalClick } from './Utils.js'

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
    normalClick: rangeNormalClick,
    prepareRenderProps: identity,
    minNormal: 0,
    maxNormal: 1,
    color: 'brand',
    rangeClass: 'range',
    draggingClass: 'range-dragging',
    hasScaleClass: 'range-has-scale',
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
    this.normalClick = props.normalClick
    this.state = {
      ...this.state,
      ...state,
      minInput: state.minValue,
      maxInput: state.maxValue,
    }
  }
  initProps(props) {
    const { normalToValue, valueToNormal, quantize, ...state } = initRange(props)
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
  onDrag(e, control, set) {
    const thumb = e.target
    if (! this._thumbsRef) {
      console.error('No thumbsRef.  Did you forget to set it in Thumbs?')
      return
    }

    const { clientX } = e
    const { left: thumbLeft, width: thumbWidth } = thumb.getBoundingClientRect()
    const thumbMid = thumbLeft + (thumbWidth / 2)
    const thumbOffset = thumbLeft - clientX
    const dragging = {
      initialX: clientX,
      thumbLeft,
      thumbMid,
      thumbOffset,
      control
    }

    const { left: thumbsLeft, width: thumbsWidth } = this._thumbsRef.getBoundingClientRect()
    dragging.thumbsLeft = thumbsLeft
    dragging.thumbsWidth = thumbsWidth
    dragging.thumbPos = (thumbMid - thumbsLeft) * 100 / thumbsWidth
    this.debug('drag start: ', dragging)
    this.setState({ dragging })

    const mouseMove = e => {
      e.preventDefault()
      const offset = e.clientX - dragging.initialX
      const newX = clamp(dragging.thumbMid + offset - dragging.thumbsLeft, 0, dragging.thumbsWidth)
      this.debug(`drag`)
      set(
        divide(newX, dragging.thumbsWidth)
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
        this.setState({ dragging: null })
        window.removeEventListener('pointermove', mouseMove)
      }
    )
  }
  onDragMin(e) {
    this.onDrag(
      e, 'min',
      value => this.setNormalisedMinValue(value)
    )
  }
  onDragMax(e) {
    this.onDrag(
      e, 'max',
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

    // Delegate to custom function which can be switch using the normalClick
    // property so that RangeMin and RangeMax can change the behaviour.  It's
    // a bit of a hack but easier than subclasses the whole context.
    this.normalClick(
      normal, minNormal, maxNormal,
      normal => this.setNormalisedMinValue(normal),
      normal => this.setNormalisedMaxValue(normal),
    )
  }
  onChange() {
    const { minValue, maxValue } = this.state
    this.props.onChange(minValue, maxValue, this.state)
  }
  getRenderProps() {
    const context = this.getContext()
    const {
      minNormal, maxNormal, minPercent, maxPercent,
      className, rangeClass, draggingClass, hasScaleClass,
      showScale, dragging, color, size
    } = context
    context.quantize = this.quantize
    context.normalToValue = this.normalToValue
    context.rangeProps = {
      className: classes(
        rangeClass,
        className,
        color,
        size,
        {
          [hasScaleClass]: showScale,
          [draggingClass]: dragging,
        },
      ),
      style: {
        '--min-position': minNormal,
        '--max-position': maxNormal,
        '--min-percent': `${minPercent}%`,
        '--max-percent': `${maxPercent}%`,
      }
    }
    return this.props.prepareRenderProps(context)
  }
}

export const RangeContext = Generator(Context)
export const {
  Provider: RangeProvider,
  Consumer: RangeConsumer,
  Children: RangeChildren,
  Use:      useRange
} = RangeContext
export default RangeContext