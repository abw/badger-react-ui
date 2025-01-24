import { extract } from '@abw/badger-utils'
import { Generator } from '@abw/react-context'
import { classes, mergeRefs } from '@/src/utils'
import { useFloating, useTrigger } from '@/src/hooks'
import { CLOSED_CLASS, OPEN_CLASS } from '@/src/constants'
import {
  DropdownBodyProps, DropdownIconProps, DropdownProps, DropdownRenderProps, DropdownTriggerProps
} from './types'
import {
  DROPDOWN_BODY_CLASS, DROPDOWN_CLASS, DROPDOWN_NO_CONTENT,
  DROPDOWN_SAFE_AREA_CLASS, DROPDOWN_TRIGGER_CLASS
} from './Constants'

const DropdownContext = Generator<DropdownProps, DropdownRenderProps>(
  ({
    render,
    content,
    className     = DROPDOWN_CLASS,
    triggerClass  = DROPDOWN_TRIGGER_CLASS,
    bodyClass     = DROPDOWN_BODY_CLASS,
    openClass     = OPEN_CLASS,
    closedClass   = CLOSED_CLASS,
    noContent     = DROPDOWN_NO_CONTENT,
    safeAreaClass = DROPDOWN_SAFE_AREA_CLASS,
    ...props
  }) => {
    // local references to props for brevity
    const {
      size, right, wide, button, icon, triggerColor, triggerSize
    } = props

    // trigger hook
    const {
      triggerRef: baseTriggerRef,
      onMouseEnter,
      onMouseLeave,
      ...trigger
    } = useTrigger(props)

    // floating hook
    const {
      refs: {
        setFloating: bodyRef,
        setReference
      },
      floatingStyles: bodyStyle,
      ...floating
    } = useFloating(props)

    // Merge the refs from trigger and floating
    const triggerRef = mergeRefs([
      setReference,
      baseTriggerRef,
    ])

    // combined className for main dropdown element
    const dropdownClass = classes(
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
      ref: triggerRef,
    }

    // combined properties for WithIcons rendered in trigger
    const iconProps: DropdownIconProps = {
      icon,
      ...extract(props, /^(icon|text)/)
    }

    // combined properties for body
    const bodyProps: DropdownBodyProps = {
      ref: bodyRef,
      style: bodyStyle,
      className: bodyClass,
      onMouseEnter,
      onMouseLeave,
    }

    return render({
      ...trigger,
      ...props,
      ...floating,
      dropdownClass,
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
      bodyClass,
      safeAreaClass,
      onMouseEnter,
      onMouseLeave,
      noContent,
      content,
    })
  }
)

export const useDropdown = DropdownContext.Use
export default DropdownContext