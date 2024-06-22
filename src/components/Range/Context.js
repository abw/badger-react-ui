import { Generator, Context as Base } from '@abw/react-context'
import { clamp, valuePercent, valueRounder } from '@/src/utils/index.js'
import { doNothing } from '@abw/badger-utils'
import { hasValue } from '@abw/badger-utils'

class Context extends Base {
  static debug        = true
  static debugPrefix  = 'Range > '
  static debugColor   = 'rebeccapurple'
  static defaultProps = {
    onChange: doNothing,
    round: false,
    min: 0,
    max: 100,
    // value: 0,
  }
  static actions = [
    // 'selectionRef',
    'thumbsRef', 'onMouseDown'
  ]
  constructor(props) {
    super(props)
    //if (props.values) {
    //  this.roundValue = valueRounder()
    //}
    this.roundValue = valueRounder(props.round)
    const percent = this.valuePercent()
    // console.log(`props: `, this.props)
    console.log(`${props.value} is ${percent}% between ${props.min} and ${props.max}`)

    // console.log(`valuePercent: `, valuePercent)
    this.state = {
      value: this.roundValue(this.props.value),
      percent: this.valuePercent(),
      ...this.state,
    }
  }
  valueState(props=this.props) {
    let { min=0, max=100, value, step } = props
    value = hasValue(value)
      ? clamp(value, min, max)
      : min + (max - min) / 2
  }
  percentValue(percent=0) {
    const { min, max } = this.props
    const range = max - min
    return this.roundValue(min + range * percent / 100)
  }
  valuePercent(value=this.props.value, min=this.props.min, max=this.props.max) {
    return valuePercent(value, min, max)
  }
  //selectionRef(ref){
  //  this._selectionRef = ref
  //}
  thumbsRef(ref){
    this._thumbsRef = ref
  }
  //thumbRef(ref){
  //  this._thumbRef = ref
  //}
  onMouseDown(e) {
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
    this.debug('thumbDrag: ', thumbDrag)
    this.setState({ thumbDrag })

    const mouseMove = e => {
      e.preventDefault()
      const offset = e.clientX - thumbDrag.initialX
      const newX = clamp(thumbDrag.thumbMid + offset - thumbDrag.thumbsLeft, 0, thumbDrag.thumbsWidth)
      this.setPercent(newX * 100 / thumbDrag.thumbsWidth)
    }
    window.addEventListener(
      'mousemove',
      mouseMove
    )
    window.addEventListener(
      'mouseup',
      () => {
        this.setState({ thumbDrag: null })
        window.removeEventListener('mousemove', mouseMove)
      }
    )
  }
  setPercent(newPercent) {
    const value = this.percentValue(newPercent)
    const percent = this.valuePercent(value)
    this.setState(
      { value, percent },
      () => this.props.onChange(value)
    )
  }
  setValue(newValue) {
    const value = this.roundValue(newValue)
    const percent = this.valuePercent(value)
    this.setState(
      { value, percent },
      () => this.props.onChange(value)
    )
  }
}

export const RangeContext = Generator(Context)
export const {
  Provider: RangeProvider,
  Consumer: RangeConsumer,
  Use:      useRange
} = RangeContext
export default RangeContext