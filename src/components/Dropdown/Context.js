import { Context, Generator } from '@abw/react-context'
import { ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, SPACE } from '@/src/constants.js'
import { doNothing, hasValue, sleep } from '@abw/badger-utils'
import { scrollParentChild } from '@/src/utils/index.js'

const inactiveState = {
  isOpen:   false,
  cursor:   undefined,
  selected: undefined,
}

class DropdownContext extends Context {
  static debug        = true
  static debugPrefix  = 'Dropdown > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    options:  [ ],
    openOnHover: false,
    closeDelay: 300,
    onLoad:   doNothing,
    onUnload: doNothing,
    onFocus:  doNothing,
    onBlur:   doNothing,
    onClick:  doNothing,
    onOpen:   doNothing,
    onClose:  doNothing,
    onSelect: doNothing,
  }
  static initialState = {
    ...inactiveState
  }
  static actions = [
    'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onClick', 'onKeyDown',
    'open', 'close', 'setCursor', 'selectCursor', 'selectItem',
    'triggerRef', 'menuRef', 'activeRef',
  ]

  componentDidMount() {
    this.mounted = true
    this.props.onLoad(this)
  }

  componentWillUnmount() {
    this.mounted = false
    this.props.onUnload(this)
  }

  onMouseEnter() {
    this.debug(`onMouseEnter()`)
    this.setState(
      { hasHover: true },
      this.props.openOnHover
        ? () => { this.open(); this.focusTrigger() }
        : null
    )
  }

  onMouseLeave() {
    this.debug(`onMouseLeave()`)
    this.setState(
      { hasHover: false },
      this.props.openOnHover
        ? () => this.closeSoon()
        : null
    )
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
    this.closeSoon()
  }

  onClick() {
    this.debug('onClick()')
    this.state.isOpen
      ? this.close()
      : this.open()
  }

  open(cursor=0) {
    this.debug(`open(${cursor})`)
    this.setState(
      {
        isOpen: true,
        cursor,
      },
      this.props.onOpen
    )
  }

  close() {
    this.debug('close()')
    this.setState(
      inactiveState,
      this.props.onClose
    )
  }

  closeSoon(force=false) {
    this.debug('closeSoon()')
    sleep(this.props.closeDelay)
      .then(
        () => {
          if (force || ! this.state.hasHover) {
            this.close()
          }
        }
      )
  }

  onKeyDown(event) {
    this.debug(`onKeyDown(${event.key})`)
    const cursor = this.state.cursor

    switch (event.key) {
      case ARROW_DOWN:
        this.state.isOpen
          ? this.setCursor(cursor + 1)
          : this.open()
        break

      case ARROW_UP:
        this.state.isOpen
          ? this.setCursor(cursor - 1)
          : this.open(this.props.items?.length - 1)
        break

      case ENTER:
      case SPACE:
        this.state.isOpen
          ? this.selectCursor()
          : this.open()
        break

      case ESCAPE:
        this.close()
        break

      default:
        console.log(`ignored key ${event.key}`)

        return
    }
    event.preventDefault()
  }

  setCursor(cursor) {
    this.debug(`setCursor(${cursor})`)
    const { items } = this.props
    cursor = (items && items.length)
      ? (cursor + items.length) % items.length
      : undefined
    this.setState({ cursor })
  }

  selectCursor() {
    this.debug(`selectCursor()`)
    const { cursor } = this.state
    const { items } = this.props
    if (items && items.length && hasValue(cursor)) {
      const value = items[cursor]
      this.debug(`selectCursor() ${cursor} =>`, value)
      this.selectItem(value)
    }
    else {
      this.debug(`Not selecting: cursor out of range`)
    }
  }

  selectItem(value) {
    this.debug(`selectItem()`, value)
    this.setState(
      {
        selected: value,
      },
      () => this.props.onSelect(value)
    )
    this.closeSoon(true)
  }

  triggerRef(ref) {
    this._triggerRef = ref
  }

  focusTrigger() {
    if (this._triggerRef) {
      this.debug('focussing trigger')
      this._triggerRef.focus()
    }
    else {
      this.debug('no trigger to focus')
    }
  }

  menuRef(ref) {
    this._menuRef = ref
  }

  activeRef(ref) {
    scrollParentChild(this.menuRef, ref)
  }
}

const generated = Generator(DropdownContext)
export const useDropdown = generated.Use
export default generated