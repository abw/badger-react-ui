import MenuContext from '@/src/context/Menu.js'
import { Generator } from '@abw/react-context'
import { BLANK } from '@/src/constants.js'
import { hasValue } from '@abw/badger-utils'
import { defaultRenderer } from '@/src/utils/index.js'

const inactiveState = {
  value:    BLANK,
  isOpen:   false,
  cursor:   undefined,
  selected: undefined,
}

class SelectContext extends MenuContext {
  static debug        = false
  static debugPrefix  = 'Select > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    ...this.defaultProps,
    options:  [ ],
    displayValue:  defaultRenderer('displayValue'),
    displayOption: defaultRenderer('displayOption'),
  }
  static initialState = {
    ...inactiveState
  }
  static initialProps = {
    value: 'initialValue',
  }
  static actions = [
    'onFocus', 'onBlur', 'onClick', 'onKeyDown',
    'open', 'close', 'setCursor', 'selectCursor', 'selectOption',
    'menuRef', 'activeRef',
  ]

  constructor(props) {
    super(props)
    const input = this.inputValue()
    this.state = {
      ...this.state,
      input,
    }
  }

  inputValue(value=this.props.initialValue) {
    return hasValue(value)
      ? this.props.displayValue(value)
      : null
  }

  selectState(value) {
    const input = this.inputValue(value)
    return {
      value,
      input,
      selected: value
    }
  }
}

export default Generator(SelectContext)