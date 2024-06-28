import { Generator, Context as Base } from '@abw/react-context'
import { anyPropsChanged, classes, extractStyleProps } from '@/src/utils/index.js'
import { doNothing, clamp, multiply, divide, identity, splitList } from '@abw/badger-utils'
import { ANY, ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from '@/src/constants.js'
import { initRange } from './Utils.js'

const WATCH_PROPS = splitList(
  'min max value step tickStep quantize'
)

class Context extends Base {
  static debug        = false
  static debugPrefix  = 'Range > '
  static debugColor   = 'rebeccapurple'
  static defaultProps = {
    onChange: doNothing,
    displayValue: identity,
    color: 'brand'
  }
  static actions = [
    'trackRef', 'thumbsRef', 'onDrag', 'onKeyDown', 'onClick',
    'setValue', 'setInput', 'stepUp', 'stepDown'
  ]
  constructor(props) {
    super(props)
    const state = this.initProps(props)
    this.state = {
      ...this.state,
      ...state,
      input: state.value,
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

  setInput(input) {
    this.setState(
      {
        input
      },
      () => this.setValue(input)
    )
  }
  setValue(value) {
    value = this.quantize(value)
    const normal = this.valueToNormal(value)
    const percent = multiply(normal, 100)
    this.setState({
      normal, value, percent
    })
  }
  step() {
    const step = this.state.step
    return step === ANY
      ? 1
      : step
  }
  stepUp() {
    const newValue = this.state.value + this.step()
    this.setValue(newValue)
    this.setInput(newValue)
  }
  stepDown() {
    const newValue = this.state.value - this.step()
    this.setValue(newValue)
    this.setInput(newValue)
  }
  setNormalisedValue(normal) {
    // this.debug(`setNormalisedValue(${normal})`)
    const value = this.normalToValue(normal)
    // this.debug(`value: ${value}`)
    normal = this.valueToNormal(value)
    // this.debug(`normal: ${normal}`)
    const percent = multiply(100, normal).toFixed(2)
    // this.debug(`percent: ${percent}`)
    this.setState({
      normal, value, percent, input: value
    })
  }
  //valuePercent(value=this.props.value, min=this.props.min, max=this.props.max) {
  //  return valuePercent(value, min, max)
  //}
  thumbsRef(ref){
    this._thumbsRef = ref
  }
  trackRef(ref){
    this._trackRef = ref
  }
  onKeyDown(event) {
    this.debug(`onKeyDown(${event.key})`)

    switch (event.key) {
      case ARROW_LEFT:
      case ARROW_DOWN:
        this.stepDown()
        break

      case ARROW_RIGHT:
      case ARROW_UP:
        this.stepUp()
        break

      default:
        this.debug(`ignored key ${event.key}`)
        return
    }
    event.preventDefault()
  }

  onDrag(e) {
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
    this.setState({ thumbDrag })

    const mouseMove = e => {
      const offset = e.clientX - thumbDrag.initialX
      const newX = clamp(thumbDrag.thumbMid + offset - thumbDrag.thumbsLeft, 0, thumbDrag.thumbsWidth)
      this.debug(`drag`)
      this.setNormalisedValue(
        divide(newX, thumbDrag.thumbsWidth)
      )
      e.preventDefault()
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
        this.debug(`mouseUp`)
        this.setState({ thumbDrag: null })
        window.removeEventListener('pointermove', mouseMove)
      }
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
    this.debug(`click at ${clickX} from ${trackLeft} with width ${trackWidth}: ${normal}`)
    this.setNormalisedValue(normal)
  }
  getRenderProps() {
    const context = this.getContext()
    const {
      normal, percent,
      className, rangeClass='range', hasScaleClass='range-has-scale',
      color, size, showScale
    } = context
    context.quantize = this.quantize
    context.normalToValue = this.normalToValue
    context.rangeProps = {
      className: classes(
        rangeClass, className, color, size,
        { [hasScaleClass]: showScale }
      ),
      style: extractStyleProps(
        { },
        this.props,
        {
          '--position': normal,
          '--percent': `${percent}%`
        }
      )
    }
    return context
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