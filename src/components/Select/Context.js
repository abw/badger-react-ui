import { Context, Generator } from '@abw/react-context'
import { ARROW_DOWN, ARROW_UP, BLANK, ENTER, ESCAPE, SPACE } from '@/src/constants.js'
import { doNothing, hasValue, sleep } from '@abw/badger-utils'
import { defaultRenderer, scrollParentChild } from '@/src/utils/index.js'

const inactiveState = {
  selecting:  false,
  cursor:     undefined,
}

class SelectContext extends Context {
  static debug        = true
  static debugPrefix  = 'Select > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    options:  [ ],
    onLoad:   doNothing,
    onUnload: doNothing,
    onFocus:  doNothing,
    onBlur:   doNothing,
    onClick:  doNothing,
    onOpen:   doNothing,
    onClose:  doNothing,
    onSelect: doNothing,
    displayValue:  defaultRenderer('displayValue'),
    displayOption: defaultRenderer('displayOption'),
  }
  static initialState = {
    value: BLANK,
    ...inactiveState
  }
  static initialProps = {
    value: 'initialValue',
  }
  static actions = [
    'onFocus', 'onBlur', 'onClick', 'onKeyDown',
    'open', 'close', 'setCursor', 'selectCursor', 'selectOption',
    'optionsRef', 'activeRef',
  ]

  constructor(props) {
    super(props)
    const input = this.inputValue()
    this.state = {
      ...this.state,
      input,
      searching: false,
    }
  }

  componentDidMount() {
    this.mounted = true
    this.props.onLoad(this)
  }

  componentWillUnmount() {
    this.setState({ results: null })
    this.mounted = false
    this.props.onUnload(this)
  }

  inputValue(value=this.props.initialValue) {
    return hasValue(value)
      ? this.props.displayValue(value)
      : null
  }

  onFocus() {
    this.debug(`onFocus()`)
    this.setState(
      { hasFocus: true },
      this.props.onFocus
    )
  }

  onBlur() {
    this.debug(`onBlur()`)
    this.setState(
      { hasFocus: false },
      this.props.onBlur
    )
    // Hack to hide result shortly after blur.  If we clear the results
    // immediately, or only display the results when the component is focussed
    // then the results disappear before an onClick has time to register.
    sleep(250). then(() => this.close())
  }

  onClick() {
    this.debug('onClick()')
    this.state.selecting
      ? this.close()
      : this.open()
  }

  open(cursor=0) {
    this.debug(`open(${cursor})`)
    this.setState(
      {
        selecting: true,
        cursor,
      },
      this.props.onOpen
    )
  }

  close() {
    this.debug('close()')
    this.setState(
      {
        selecting: false,
        cursor: undefined,
      },
      this.props.onClose
    )
  }

  onKeyDown(event) {
    this.debug(`onKeyDown(${event.key})`)
    const cursor = this.state.cursor

    switch (event.key) {
      case ARROW_DOWN:
        this.state.selecting
          ? this.setCursor(cursor + 1)
          : this.open()
        break

      case ARROW_UP:
        this.state.selecting
          ? this.setCursor(cursor - 1)
          : this.open(this.props.options?.length - 1)
        break

      case ENTER:
        this.state.selecting
          ? this.selectCursor()
          : this.open()
        break

      case ESCAPE:
        this.close()
        break

      case SPACE:
        if (! this.state.selecting) {
          this.open()
        }
        break

      default:
        console.log(`ignored key ${event.key}`)

        return
    }
    event.preventDefault()
  }

  setCursor(cursor) {
    this.debug(`setCursor(${cursor})`)
    const { options } = this.props
    // handle cases where cursor is less than 0 or greater than the length
    cursor = (options && options.length)
      ? (cursor + options.length) % options.length
      : undefined
    this.setState({ cursor })
  }

  selectCursor() {
    this.debug(`selectCursor()`)
    const { cursor } = this.state
    const { options } = this.props
    if (options && options.length && hasValue(cursor)) {
      const value = options[cursor]
      this.debug(`selectCursor() ${cursor} =>`, value)
      this.selectOption(value)
    }
    else {
      this.debug(`Not selecting: cursor out of range`)
    }
  }

  selectOption(value) {
    this.debug(`selectOption()`, value)
    const input = this.inputValue(value)
    this.setState(
      {
        value,
        input,
        ...inactiveState
      },
      () => this.props.onSelect(value)
    )
  }

  optionsRef(ref){
    this._optionsRef = ref
  }

  activeRef(ref) {
    scrollParentChild(this.optionsRef, ref)
  }
}

export default Generator(SelectContext)