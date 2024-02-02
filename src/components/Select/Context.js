import MenuContext from '@/src/context/Menu.js'
import { Generator } from '@abw/react-context'
import { BLANK } from '@/src/constants.js'
import { hasValue } from '@abw/badger-utils'
import { findOption, validOption, defaultRenderer } from '@/src/utils/index.js'

/*
const XXXinactiveState = {
  value:    BLANK,
  isOpen:   false,
  cursor:   undefined,
  selected: undefined,
}
*/

class SelectContext extends MenuContext {
  static debug        = false
  static debugPrefix  = 'Select > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    ...this.defaultProps,
    options:  [ ],
    findOption,
    validOption,
    displayValue:  defaultRenderer('displayValue'),
    displayOption: defaultRenderer('displayOption'),
  }
  // NOTE: we don't want to reset the cursor or value when closing
  static inactiveState = {
    isOpen:   false,
    selected: undefined,
  }
  static initialState = {
    value:  BLANK,
    cursor: undefined,
    ...this.inactiveState
  }
  static initialProps = {
    // value: 'initialValue',
  }
  static actions = [
    'onFocus', 'onBlur', 'onClick', 'onKeyDown',
    'open', 'close', 'setCursor', 'selectCursor', 'selectOption',
    'menuRef', 'activeRef',
  ]

  constructor(props) {
    super(props)
    this.debug('start value: ', this.props.value)
    const [value, cursor] = this.props.findOption(
      this.props.options,
      this.props.value
    )
    this.debug(`value:`, value)
    this.debug(`cursor:`, cursor)
    const input = this.inputValue(value)
    this.debug(`input:`, input)

    this.state = {
      ...this.state,
      value,
      cursor,
      input,
    }
  }

  initialCursor() {
    return this.state.cursor
  }

  inputValue(value=this.props.value) {
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