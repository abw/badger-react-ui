import { Model } from '@abw/react-model'
import { useCallback, useMemo, useRef, useState } from 'react'
import { extract, hasValue } from '@abw/badger-utils'
import { useCursor, useFloating, useTrigger } from '@/src/hooks'
import { DropdownIconProps, DropdownTriggerProps } from '../Dropdown/types'
import {
  classes, debugFunction, mergeRefs, SelectOption, withIconsRenderer,
  validOption as defaultValidOption,
  scrollParentChild,
} from '@/src/utils'
import {
  DROPDOWN_MENU_BODY_CLASS, DROPDOWN_MENU_OPTION_CLASS
} from './Constants'
import {
  DROPDOWN_CLASS, DROPDOWN_SAFE_AREA_CLASS, DROPDOWN_TRIGGER_CLASS
} from '../Dropdown/Constants'
import {
  DropdownMenuBodyProps, DropdownMenuProps, DropdownMenuRenderProps
} from './types'
import {
  ACTIVE_CLASS, ARROW_DOWN, ARROW_UP, CLOSED_CLASS, DISABLED_CLASS, ENTER,
  ESCAPE, HEADING_CLASS, OPEN_CLASS, SELECTED_CLASS, SEPARATOR_CLASS, SPACE
} from '@/src/constants'

// export const DropdownMenuContext = Model<DropdownMenuProps, DropdownMenuRenderProps>(
export const DropdownMenuContext = Model<DropdownMenuProps, DropdownMenuRenderProps>(
  ({
    className      = DROPDOWN_CLASS,
    triggerClass   = DROPDOWN_TRIGGER_CLASS,
    bodyClass      = DROPDOWN_MENU_BODY_CLASS,
    openClass      = OPEN_CLASS,
    closedClass    = CLOSED_CLASS,
    safeAreaClass  = DROPDOWN_SAFE_AREA_CLASS,
    optionClass    = DROPDOWN_MENU_OPTION_CLASS,
    activeClass    = ACTIVE_CLASS,
    selectedClass  = SELECTED_CLASS,
    disabledClass  = DISABLED_CLASS,
    headingClass   = HEADING_CLASS,
    separatorClass = SEPARATOR_CLASS,
    displayOption  = withIconsRenderer,
    validOption    = defaultValidOption,
    debugPrefix    = 'DropdownMenu > ',
    closeOnSelect  = true,
    ...props
  }) => {
    // debugging function
    const debug = debugFunction({
      ...props,
      debugPrefix
    })

    // local references to props for brevity
    const {
      size, right, wide, button, icon, triggerColor, triggerSize
    } = props

    // selected item
    const [selected, setSelected] = useState<SelectOption|undefined>(undefined)
    const clearSelected = () => setSelected(undefined)

    // cursor hook
    const {
      cursor,
      setCursorIndex: setCursor,
      setCursorFirst,
      setCursorNext,
      setCursorPrev,
      setCursorLast,
    } = useCursor({
      ...props,
      validOption,
      debugPrefix
    })

    // trigger hook
    const {
      triggerRef: baseTriggerRef,
      onMouseEnter,
      onMouseLeave,
      ...trigger
    } = useTrigger({
      ...props,
      debugPrefix,
      onOpen: () => {
        clearSelected()
        setCursorFirst()
        // TODO: add an onOpen() callback?
      }
    })

    // floating hook
    const {
      refs: {
        setFloating: floatingRef,
        setReference
      },
      floatingStyles: bodyStyle,
      ...floating
    } = useFloating(props)

    // Merge the refs from trigger and floating
    const triggerRef = useMemo(
      () => mergeRefs([
        setReference,
        baseTriggerRef,
      ]),
      [setReference, baseTriggerRef]
    )

    // Create a menu ref for scrolling and merge with floating ref
    const menuRef = useRef<HTMLElement>(null)
    const bodyRef = useMemo(
      () => mergeRefs([
        menuRef,
        floatingRef
      ]),
      [menuRef, floatingRef]
    )

    // Handler for selecting an option, either by clicking on it or called
    // by selectCursor below which is called when Enter/Space pressed.
    const selectOption = (option: SelectOption) => {
      debug(`selectOption:`, option)
      setSelected(option)
      // TODO: selectState(option)
      if (props.onSelect) {
        props.onSelect(option)
      }
      if (closeOnSelect) {
        debug(`closeOnSelect`)
        trigger.closeSoon(true)
      }
    }

    // Handler called when Enter/Space is pressed when the menu is open
    const selectCursor = () => {
      debug(`selectCursor()`)
      const options = props.options
      if (options && options.length && hasValue(cursor)) {
        const value = options[cursor]
        debug(`selectCursor() ${cursor} =>`, value)
        selectOption(value)
      }
    }

    // Custom key handler to replace the one from useTrigger().  It has to
    // replicate the functionality of it but with extra bells and whistles
    const onKeyDown = (event: React.KeyboardEvent) => {
      debug(`onKeyDown(${event.key})`)
      switch (event.key) {
        case ARROW_DOWN:
          if (trigger.isOpen) {
            debug('DOWN and open: select next')
            setCursorNext()
          }
          else {
            debug('DOWN and closed: open and select first')
            trigger.open()
            setCursorFirst()
          }
          break

        case ARROW_UP:
          if (trigger.isOpen) {
            debug('UP and open: select previous')
            setCursorPrev()
          }
          else {
            debug('UP and closed: open and select last')
            trigger.open()
            setCursorLast()
          }
          break

        case ENTER:
        case SPACE:
          if (trigger.isOpen) {
            debug('ENTER/SPACE and open: select current item')
            selectCursor()
          }
          else {
            debug('ENTER/SPACE and closed: open and select first')
            trigger.open()
            setCursorFirst()
          }
          break

        case ESCAPE:
          debug('ESCAPE: close')
          trigger.close()
          break

        default:
          debug(`ignored key ${event.key}`)
          return
      }
      event.preventDefault()
    }

    // combined className for main dropdown menu element
    const dropdownMenuClass = classes(
      className,
      size,
      trigger.isOpen ? openClass : closedClass,
      { right, wide }
    )

    // combined className for dropdown trigger
    const triggerClasses = classes(
      triggerClass,
      triggerColor,
      triggerSize,
      { button, icon }
    )

    // combined properties for trigger
    const triggerProps: DropdownTriggerProps = {
      ...trigger.triggerProps,
      className: triggerClasses,
      tabIndex: 0,
      onKeyDown,
      ref: triggerRef,
    }

    // combined properties for WithIcons rendered in trigger
    const iconProps: DropdownIconProps = {
      icon,
      ...extract(props, /^(icon|text)/)
    }

    // combined properties for body
    const bodyProps: DropdownMenuBodyProps = {
      ref: bodyRef,
      style: bodyStyle,
      className: bodyClass,
      onMouseEnter,
      onMouseLeave,
    }

    // handler for active item - scrolls the parent menu container until the
    // active item is in view
    const activeRef = useCallback(
      (ref: HTMLElement | null) => {
        if (ref && menuRef.current) {
          debug('scrolling active item into view')
          scrollParentChild(menuRef.current, ref)
        }
      },
      [menuRef, debug]
    )

    return {
      ...trigger,
      ...props,
      ...floating,
      dropdownMenuClass,
      className,
      openClass,
      closedClass,
      triggerClass,
      triggerProps,
      triggerRef,
      iconProps,
      bodyRef,
      bodyProps,
      bodyStyle,
      safeAreaClass,
      optionClass,
      activeClass,
      selectedClass,
      disabledClass,
      headingClass,
      separatorClass,
      onMouseEnter,
      onMouseLeave,
      cursor,
      setCursor,
      displayOption,
      validOption,
      selectOption,
      activeRef,
      closeOnSelect,
      selected,
      // TMP
      // menuRef,
      //floatingRef,
    }
  }
)

export const {
  Provider: DropdownMenuProvider,
  Consumer: DropdownMenuConsumer,
  Use: useDropdownMenu
} = DropdownMenuContext

export default DropdownMenuContext
/*
export const defaultDropdownMenuContextProps = {
  ...defaultMenuContextProps,
  displayOption: withIconsRenderer,
}

class DropdownMenuContext extends MenuContext<
  DropdownMenuProps,
  DropdownMenuState,
  DropdownMenuActions
> {
  static debug        = false
  static debugPrefix  = 'Dropdown > '
  static debugColor   = 'MediumVioletRed'
  static actions = [
    'onMouseEnter',
    'onMouseLeave',
    'onFocus',
    'onBlur',
    'onClick',
    'onKeyDown',
    'open',
    'close',
    'setCursor',
    'selectCursor',
    'selectOption',
    'triggerRef',
    'menuRef',
    'activeRef'
  ]

  // static defaultProps = defaultDropdownMenuContextProps

  config: WithRequiredFrom<
    DropdownMenuProps,
    typeof defaultDropdownMenuContextProps
  >

  constructor(
    props: ContextConstructorProps<
      DropdownMenuProps,
      DropdownMenuState,
      DropdownMenuActions
    >
  ) {
    super(props)
    this.mounted = false
    this.config = {
      ...defaultDropdownMenuContextProps,
      ...props
    }
  }
  getRenderProps() {
    return {
      ...this.config,
      ...this.state,
      ...this.actions
    }
  }
}

const generated = Generator(DropdownMenuContext)
export const useDropdownMenu = generated.Use
export default generated
*/