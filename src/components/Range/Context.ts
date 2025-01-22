import { Generator, Context as Base, WithRequiredFrom } from '@abw/react-context'
import { anyPropsChanged, classes, extractStyleProps } from '@/src/utils/index'
import { doNothing, identity, splitList, sleep } from '@abw/badger-utils'
import { clamp, multiply, divide } from '@abw/badger-maths'
import { ANY, ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from '@/src/constants'
import { displayValueFromOptions, initRange, rangeNormalClick } from './Utils'
import { RANGE_DRAGGING_CLASS, RANGE_HAS_SCALE_CLASS } from './Constants.js'
import {
  RangeActions, RangeConstructorProps, RangeDragging, RangeEventListeners,
  RangeNormalClick, RangeNormalToValue, RangeOnChangeHandler, RangeProps,
  RangeQuantizer, RangeRenderPropsPrepare, RangeState, RangeValueToNormal
} from './types.js'

const WATCH_PROPS = splitList(
  'min max value options minValue maxValue minRange maxRange step tickStep quantize'
)

export const defaultRangeProps = {
  onChange: doNothing as RangeOnChangeHandler,
  onChangeValue: doNothing as RangeOnChangeHandler,
  normalClick: rangeNormalClick,
  prepareRenderProps: identity as RangeRenderPropsPrepare,
  displayValue: displayValueFromOptions,
  minNormal: 0,
  maxNormal: 1,
  dragTimeout: 300,
  color: 'brand',
  rangeClass: 'range',
  draggingClass: RANGE_DRAGGING_CLASS,
  hasScaleClass: RANGE_HAS_SCALE_CLASS
}

class Context extends Base<
  RangeProps,
  RangeState,
  RangeActions
> {
  static debug        = false
  static debugPrefix  = 'Range > '
  static debugColor   = 'rebeccapurple'
  /*
  static defaultProps = {
    onChange: doNothing,
    onChangeValue: doNothing,
    // displayValue: identity,
    normalClick: rangeNormalClick,
    prepareRenderProps: identity,
    minNormal: 0,
    maxNormal: 1,
    dragTimeout: 300,
    color: 'brand',
    rangeClass: 'range',
    draggingClass: 'range-dragging',
    hasScaleClass: 'range-has-scale',
  }
  */
  static actions = [
    'trackRef',
    'thumbsRef',
    'setMinValue',
    'setMaxValue',
    'setValues',
    'setMinInput',
    'setMaxInput',
    'stepMinUp',
    'stepMaxUp',
    'stepMinDown',
    'stepMaxDown',
    'onDragMin',
    'onDragMax',
    'onKeyDownMin',
    'onKeyDownMax',
    'onClick',
  ]

  config: WithRequiredFrom<
    RangeProps,
    typeof defaultRangeProps
  >
  normalClick: RangeNormalClick
  quantize: RangeQuantizer
  normalToValue: RangeNormalToValue
  valueToNormal: RangeValueToNormal
  lastChange?: [ number, number ]
  windowEventListeners: RangeEventListeners
  _trackRef?: HTMLElement
  _thumbsRef?: HTMLElement
  _thumbRef?: HTMLElement
  // TODO

  constructor(props: RangeConstructorProps) {
    super(props)
    this.config = {
      ...defaultRangeProps,
      ...props
    }
    const { normalToValue, valueToNormal, quantize, ...state } = initRange(props)
    this.quantize = quantize
    this.normalToValue = normalToValue
    this.valueToNormal = valueToNormal

    this.normalClick = this.config.normalClick
    this.windowEventListeners = { }
    this.state = {
      ...this.state,
      ...state,
      minInput: state.minValue,
      maxInput: state.maxValue,
    }
  }
  /*
  NOTinitProps(props) {
    const { normalToValue, valueToNormal, quantize, ...state } = initRange(props)
    this.quantize = quantize
    this.normalToValue = normalToValue
    this.valueToNormal = valueToNormal
    return state
  }
  */
  componentDidUpdate(prevProps: RangeProps) {
    if (anyPropsChanged(WATCH_PROPS, this.props, prevProps)) {
      this.debug(`props have changed`)
      const { normalToValue, valueToNormal, quantize, ...state } = initRange(this.props)
      this.quantize = quantize
      this.normalToValue = normalToValue
      this.valueToNormal = valueToNormal
      this.setState(state)
    }
  }
  componentWillUnmount() {
    this.debug(`unmount`)
    this.removeAllWindowEventListeners()
  }
  addWindowEventListener(event: string, listener: EventListener) {
    const eventListeners = this.windowEventListeners[event] ||= [ ]
    window.addEventListener(event, listener)
    eventListeners.push(listener)
  }
  removeWindowEventListener(event: string, listener: EventListener) {
    const eventListeners = this.windowEventListeners[event] ||= [ ]
    window.removeEventListener(event, listener)
    const index = eventListeners.indexOf(listener)
    if (index >= 0) {
      this.debug(`removing existing ${event} window listener`)
      this.debug(`had ${eventListeners.length} listeners`)
      eventListeners.splice(index, 1)
      this.debug(`now got ${eventListeners.length} listeners`)
    }
    else {
      this.debug(`could not find cached ${event} listener to remove`)
    }
  }
  removeAllWindowEventListeners() {
    this.debug(`Removing all window event listeners`)
    Object.entries(this.windowEventListeners).forEach(
      ([event, listeners]) => {
        this.debug(`Removing ${listeners.length} ${event} listeners`)
        listeners.forEach(
          listener => window.removeEventListener(event, listener)
        )
      }
    )
    this.windowEventListeners = { }
  }

  minValueLimits(): [number, number] {
    const { maxValue, min, max, minRange, maxRange } = this.state
    return [
      clamp(maxValue - maxRange, min, max),
      clamp(maxValue - minRange, min, max)
    ]
  }

  maxValueLimits(): [number, number] {
    const { minValue, min, max, minRange, maxRange } = this.state
    return [
      clamp(minValue + minRange, min, max),
      clamp(minValue + maxRange, min, max)
    ]
  }

  setMinInput(minInput: number) {
    this.setState(
      { minInput },
      () => this.setMinValue(minInput)
    )
  }

  setMaxInput(maxInput: number) {
    this.setState(
      { maxInput },
      () => this.setMaxValue(maxInput)
    )
  }

  setMinValue(minValue: number) {
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

  setMaxValue(maxValue: number) {
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

  setValues(minValue: number, maxValue: number) {
    this.setMinValue(minValue)
    this.setMaxValue(maxValue)
  }

  setNormalisedMinValue(minNormal: number) {
    const minValue = clamp(
      this.normalToValue(minNormal),
      ...this.minValueLimits()
    )
    minNormal = this.valueToNormal(minValue)
    const minPercent = parseFloat(multiply(100, minNormal).toFixed(2))        // FIXME
    this.setState(
      {
        minNormal, minValue, minPercent, minInput: minValue
      },
      () => this.onChange()
    )
    return minValue
  }

  setNormalisedMaxValue(maxNormal: number) {
    const maxValue = clamp(
      this.normalToValue(maxNormal),
      ...this.maxValueLimits()
    )
    maxNormal = this.valueToNormal(maxValue)
    const maxPercent = parseFloat(multiply(100, maxNormal).toFixed(2))        // FIXME
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
    this.setMinInput(newValue)
  }

  stepMaxUp() {
    const newValue = this.state.maxValue + this.step()
    this.setMaxInput(newValue)
  }

  stepMinDown() {
    const newValue = this.state.minValue - this.step()
    this.setMinInput(newValue)
  }

  stepMaxDown() {
    const newValue = this.state.maxValue - this.step()
    this.setMaxInput(newValue)
  }

  thumbsRef(ref: HTMLElement){
    this._thumbsRef = ref
  }

  trackRef(ref: HTMLElement){
    this._trackRef = ref
  }

  onKeyDown(event: KeyboardEvent, down: () => void, up: () => void) {
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

  onKeyDownMin(event: KeyboardEvent) {
    this.onKeyDown(
      event,
      () => this.stepMinDown(),
      () => this.stepMinUp(),
    )
  }

  onKeyDownMax(event: KeyboardEvent) {
    this.onKeyDown(
      event,
      () => this.stepMaxDown(),
      () => this.stepMaxUp(),
    )
  }

  onDrag(e: MouseEvent, control: string, set: (value: number) => void) {
    const thumb = e.target as HTMLElement
    if (! thumb) {
      return
    }
    if (! this._thumbsRef) {
      console.error('No thumbsRef.  Did you forget to set it in Thumbs?')
      return
    }
    const { clientX } = e
    const { left: thumbLeft, width: thumbWidth } = thumb.getBoundingClientRect()
    const thumbMid = thumbLeft + (thumbWidth / 2)
    const thumbOffset = thumbLeft - clientX
    const { left: thumbsLeft, width: thumbsWidth } = this._thumbsRef.getBoundingClientRect()
    const dragging: RangeDragging = {
      initialX: clientX,
      thumbLeft,
      thumbMid,
      thumbOffset,
      control,
      thumbsLeft,
      thumbsWidth,
      thumbPos: (thumbMid - thumbsLeft) * 100 / thumbsWidth
    }

    this.debug('drag start: ', dragging)
    this.setState({ dragging })

    const mouseMove = (e: MouseEvent) => {
      e.preventDefault()
      const offset = e.clientX - dragging.initialX
      const newX = clamp(dragging.thumbMid + offset - dragging.thumbsLeft, 0, dragging.thumbsWidth)
      this.debug(`drag`)
      set(
        divide(newX, dragging.thumbsWidth)
      )
    }
    const removePointerUp = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      this.debug(`drag end`)
      this.removeWindowEventListener('pointermove', mouseMove as EventListener)
      this.removeWindowEventListener('pointerup', removePointerUp as EventListener)
      sleep(this.config.dragTimeout).then(
        () => this.setState({ dragging: undefined })
      )
    }
    this.addWindowEventListener(
      'pointermove',
      mouseMove as EventListener
    )
    this.addWindowEventListener(
      'pointerup',
      removePointerUp as EventListener
    )
    /*
    this.addWindowEventListener(
      'pointercancel',
      removePointerUp
    )
    */
  }

  onDragMin(e: MouseEvent) {
    this.onDrag(
      e, 'min',
      value => this.setNormalisedMinValue(value)
    )
  }

  onDragMax(e: MouseEvent) {
    this.onDrag(
      e, 'max',
      value => this.setNormalisedMaxValue(value)
    )
  }

  onClick(e: MouseEvent) {
    const track = this._trackRef
    if (! track) {
      console.error('No trackRef.  Did you forget to set it in Track?')
      return
    }
    if (this.state.dragging) {
      this.debug('Just finished dragging... ignoring click')
      return
    }
    const { clientX: clickX } = e
    const { left: trackLeft, width: trackWidth } = track.getBoundingClientRect()
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
    this.config.onChange(minValue, maxValue, this.state)
    const [ lastChangeMin, lastChangeMax ] = (this.lastChange || [ ])
    if (minValue !== lastChangeMin || maxValue !== lastChangeMax) {
      this.debug(`min and/or max value have changed, firing onChangeValue`)
      this.config.onChangeValue(minValue, maxValue, this.state)
      this.lastChange = [ minValue, maxValue ]
    }
  }
  getRenderProps() {
    type ConfigProps= WithRequiredFrom<
      RangeProps,
      typeof defaultRangeProps
    >
    type ContextProps = ConfigProps & RangeState & RangeActions

    const context: ContextProps = {
      ...this.config,
      ...this.state,
      ...this.actions
    }
    const {
      minNormal, maxNormal, minPercent, maxPercent,
      className, rangeClass,
      showScale, dragging, color, size,
      draggingClass = RANGE_DRAGGING_CLASS,
      hasScaleClass,
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
      style: extractStyleProps(
        { },
        this.props,
        {
          '--min-position': minNormal,
          '--max-position': maxNormal,
          '--min-percent': `${minPercent}%`,
          '--max-percent': `${maxPercent}%`,
        }
      )
    }
    return this.config.prepareRenderProps(context)
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