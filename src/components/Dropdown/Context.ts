import { Generator } from '@abw/react-context'
import { DropdownProps, DropdownRenderProps } from './types'
import { useFloating, useTrigger } from '@/src/hooks'
import { mergeRefs } from '@/src/utils'
// import { DROPDOWN_BODY_CLASS } from './Constants'

const DropdownContext = Generator<DropdownProps, DropdownRenderProps>(
  ({
    render,
    // bodyClass = DROPDOWN_BODY_CLASS,
    ...props
  }) => {
    // trigger
    const {
      triggerRef: baseTriggerRef,
      ...trigger
    } = useTrigger<HTMLDivElement>(props)

    // floating
    const {
      refs: {
        setFloating: bodyRef,
        setReference
      },
      floatingStyles: bodyStyle,
      ...floating
    } = useFloating(props)

    // Merge the refs from trigger and floating
    /*
    const triggerRef = mergeRefs<HTMLDivElement>(
      setReference,
      baseTriggerRef,
    )
    */
    const triggerRef = mergeRefs([
      setReference,
      baseTriggerRef,
    ])

    /*className={bodyClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={bodyRef}
      style={bodyStyle}
    */
    /*
    const bodyProps = {
      className: bodyClass,
      onMouseEnter,
          onMouseLeave,
      bodyRef,
          bodyStyle,
          content,
    }
    */

    return render({
      ...trigger,
      ...props,
      ...floating,
      bodyRef,
      bodyStyle,
      triggerRef,
    })
  }
)

/*
class DropdownContext extends BaseContext<
  DropdownProps,
  DropdownState
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
    'triggerRef'
  ]
}
*/

// const generated = Generator(DropdownContext)
export const useDropdown = DropdownContext.Use
export default DropdownContext