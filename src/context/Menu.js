import { Context } from '@abw/react-context'
import { ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, SPACE } from '@/src/constants.js'
import { doNothing, hasValue, sleep } from '@abw/badger-utils'
import { scrollParentChild } from '@/src/utils/index.js'

// This probably needs to be made a static property as it changes from
// on subclass to another
const inactiveState = {
  // selecting:  false,
  isOpen:     false,
  cursor:     undefined,
  selected:   undefined,
}

class MenuContext extends Context {
  static debug        = true
  static defaultProps = {
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
  //static actions = [
  //  'onFocus', 'onBlur', 'onClick', 'onKeyDown',
  //  'open', 'close', 'setCursor', 'selectCursor', 'selectOption',
  //  'optionsRef', 'activeRef',
  //]

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
          : this.open(this.props.options?.length - 1)
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
    this.setState(
      // TODO: this needs to be abstracted out
      // For select it's:
      // {
      //   value,
      //   input: this.inputValue(value)
      //   ...inactiveState
      // },
      this.selectState(value),
      () => this.props.onSelect(value)
    )
    this.closeSoon(true)
  }

  selectState(value) {
    return { selected: value }
  }

  // do we have a trigger in select/search?  I suppose so...
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

  menuRef(ref){
    this._menuRef = ref
  }

  activeRef(ref) {
    scrollParentChild(this._menuRef, ref)
  }
}

export default MenuContext