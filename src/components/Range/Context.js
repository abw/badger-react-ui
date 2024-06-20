import { Generator, Context as Base } from '@abw/react-context'
import { clamp, valuePercent, valueRounder } from '@/src/utils/index.js'
import { doNothing } from '@abw/badger-utils'

class Context extends Base {
  static debug        = true
  static debugPrefix  = 'Range > '
  static debugColor   = 'rebeccapurple'
  static defaultProps = {
    onChange: doNothing,
    round: false,
    min: 0,
    max: 100,
    value: 0,
  }
  static actions = [
    'selectionRef', 'thumbsRef', 'thumbRef', 'onMouseDown'
  ]
  constructor(props) {
    super(props)
    this.rounder = valueRounder(props.round)
    const percent = this.valuePercent()
    // console.log(`props: `, this.props)
    console.log(`${props.value} is ${percent}% between ${props.min} and ${props.max}`)

    // console.log(`valuePercent: `, valuePercent)
    this.state = {
      value: this.rounder(this.props.value),
      percent: this.valuePercent(),
      ...this.state,
      valuePercent
    }
  }
  percentValue(percent=0) {
    const { min, max } = this.props
    const range = max - min
    return this.rounder(min + range * percent / 100)
  }
  valuePercent(value=this.props.value, min=this.props.min, max=this.props.max) {
    return valuePercent(value, min, max)
  }
  selectionRef(ref){
    this._selectionRef = ref
  }
  thumbsRef(ref){
    this._thumbsRef = ref
  }
  thumbRef(ref){
    this._thumbRef = ref
  }
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
      const offset = e.clientX - thumbDrag.initialX
      const newX = clamp(thumbDrag.thumbMid + offset - thumbDrag.thumbsLeft, 0, thumbDrag.thumbsWidth)
      const newpos = newX * 100 / thumbDrag.thumbsWidth
      const value = this.percentValue(newpos)
      const percent = this.valuePercent(value)
      // console.log(`newpost:${newpos}  value:${value}  percent:${percent}`)
      this.setState({ value, percent })
      // console.log(`move: ${offset} newX: ${newX}`)
      e.preventDefault()
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

}

export const RangeContext = Generator(Context)
export const {
  Provider: RangeProvider,
  Consumer: RangeConsumer,
  Use:      useRange
} = RangeContext
export default RangeContext