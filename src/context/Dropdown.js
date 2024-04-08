import { Context } from '@abw/react-context'
import { ENTER, ESCAPE, SPACE } from '@/src/constants.js'
import { doNothing, sleep } from '@abw/badger-utils'



class DropdownContext extends Context {
  static debug        = false
  static defaultProps = {
    options: [ ],
    openOnHover: false,
    closeOnBlur: true,
    closeDelay:  300,
    onLoad:   doNothing,
    onUnload: doNothing,
    onFocus:  doNothing,
    onBlur:   doNothing,
    onClick:  doNothing,
    onOpen:   doNothing,
    onClose:  doNothing,
  }
  static inactiveState = {
    isOpen: false,
  }
  static initialState = {
    ...this.inactiveState
  }

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
    if (this.props.closeOnBlur) {
      this.closeSoon()
    }
  }

  onClick() {
    this.debug('onClick()')
    this.state.isOpen
      ? this.close()
      : this.open()
  }

  open() {
    this.debug(`open()`)
    this.setState(
      {
        isOpen: true,
      },
      this.props.onOpen
    )
  }

  close() {
    this.debug('close()')
    this.setState(
      this.closeState(),
      this.props.onClose
    )
  }
  closeState() {
    return this.constructor.inactiveState
  }

  closeSoon(force=false) {
    this.debug(`closeSoon()  force:${force}`)
    sleep(this.props.closeDelay)
      .then(
        () => {
          if (this.closeable(force)) {
            this.close()
          }
          else {
            this.debug(`NOT closing force:${force} hasHover:${this.state.hasHover}`)
          }
        }
      )
  }

  closeable(force) {
    return force || ! this.state.hasHover
  }

  onKeyDown(event) {
    this.debug(`onKeyDown(${event.key})`)

    switch (event.key) {
      case ENTER:
      case SPACE:
        this.state.isOpen
          ? this.close()
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
}

export default DropdownContext