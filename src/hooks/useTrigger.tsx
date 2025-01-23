import { doNothing, sleep } from '@abw/badger-utils'
import { useState, useRef, useEffect } from 'react'
import { debugFunction, DebugOptions } from '../utils'
import { ENTER, ESCAPE, SPACE } from '@/src/constants'

export type UseTriggerProps = DebugOptions & {
  openOnHover?: boolean
  closeOnBlur?: boolean
  closeDelay?:  number
  onFocus?: () => void,
  onBlur?: () => void,
  onClick?: () => void,
  onOpen?: () => void,
  onClose?: () => void,
}

export const useTrigger = <T extends HTMLElement = HTMLElement>({
  openOnHover = false,
  closeOnBlur = true,
  closeDelay = 300,
  onOpen = doNothing,
  onClose = doNothing,
  // We're going to mask these with our own onFocus, etc., wrappers
  onFocus: onFocusCallback = doNothing,
  onBlur:  onBlurCallback  = doNothing,
  onClick: onClickCallback = doNothing,
  ...props
}: UseTriggerProps = { }) => {
  const debug = debugFunction(props)
  const triggerRef = useRef<T>(null)
  const [isOpen, setOpen] = useState<boolean>(false)
  const [hasHover, setHover] = useState<boolean>(false)
  const [hasFocus, setFocus] = useState<boolean>(false)

  // We need to be able to read the immediate value of the hover state in
  // the closeable() function below.  Without this, the closure we create in
  // closeSoon() will capture the current value of hasHover and not reflect
  // any changes to it at the point at which the deferred closure runs.
  const hoverRef = useRef(hasHover)
  useEffect(
    () => {
      hoverRef.current = hasHover
    },
    [hasHover]
  )

  const onMouseEnter = () => {
    debug(`onMouseEnter()`)
    setHover(true)
    if (openOnHover) {
      open()
      focusTrigger()
    }
  }

  const onMouseLeave = () => {
    debug(`onMouseLeave()`)
    setHover(false)
    if (openOnHover) {
      closeSoon()
    }
  }

  const onFocus = () => {
    debug(`onFocus()`)
    setFocus(true)
    onFocusCallback()
  }

  const onBlur = () => {
    debug(`onBlur()`)
    setFocus(false)
    onBlurCallback()
    // Hack to hide result shortly after blur.  If we clear the results
    // immediately, or only display the results when the component is focussed
    // then the results disappear before an onClick has time to register.
    if (closeOnBlur) {
      closeSoon()
    }
  }

  const onClick = () => {
    debug('onClick()')
    toggleOpen()
    onClickCallback()
  }

  const toggleOpen = () => {
    debug('toggleOpen()')
    if (isOpen) {
      close()
    }
    else {
      open()
    }
  }

  const open = () => {
    debug(`open()`)
    setOpen(true)
    onOpen()
  }

  const close = () => {
    debug('close()')
    // this.closeState(),
    setOpen(false)
    onClose()
  }

  const closeSoon = (force=false) => {
    debug(`closeSoon()  force:${force}`)
    // We have to introduce a slight delay when we lose focus because the user
    // might have shifted the pointer hover from a dropdown trigger to a
    // dropdown menu.  To further complicate matters, there might be a "dead
    // zone" between the trigger and menu, or a "dead time" before the menu is
    // displayed.  Hovering on the menu re-triggers a focus which should then
    // prevent the menu from closing.
    sleep(closeDelay)
      .then(
        () => {
          if (closeable(force)) {
            close()
          }
          else {
            debug(`NOT closing force:${force} hasHover:${hasHover}`)
          }
        }
      )
  }

  const closeable = (force: boolean) =>
    force || ! hoverRef.current

  const onKeyDown = (event: React.KeyboardEvent) => {
    debug(`onKeyDown(${event.key})`)

    switch (event.key) {
      case ENTER:
      case SPACE:
        toggleOpen()
        break

      case ESCAPE:
        close()
        break

      default:
        debug(`ignored key ${event.key}`)
        return
    }
    event.preventDefault()
  }

  const focusTrigger = () => {
    if (triggerRef.current) {
      debug('focussing trigger')
      triggerRef.current.focus()
    }
    else {
      debug('no trigger to focus')
    }
  }

  return {
    isOpen, toggleOpen, open, close,
    hasHover, onMouseEnter, onMouseLeave,
    hasFocus, onFocus, onBlur, onClick, onKeyDown,
    triggerRef,
    triggerProps: {
      ref: triggerRef,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onKeyDown,
    }
  }
}

/*
  onLoad:   doNothing as ThisCallback,
  onUnload: doNothing as ThisCallback,
}
*/