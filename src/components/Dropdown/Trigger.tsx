import Context        from './Context'
import WithIcons      from '@/components/Icon/WithIcons'
import { extract }    from '@abw/badger-utils'
import { classes }    from '@/src/utils/classes'
// import { DropdownTriggerProps } from './types'
// import { mergeRefs }  from '@/src/utils/refs'
// import { RefObject } from 'react'

export const DropdownTrigger = Context.Consumer(
  ({
    triggerClass='trigger',
    triggerRef,
    triggerColor,
    triggerSize,
    button,
    icon,
    safeAreaClass='safe-area',
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onFocus,
    onBlur,
    onClick,
    ...props
  }) =>
    <div
      className={
        classes(
          triggerClass,
          triggerColor,
          triggerSize,
          { button, icon }
        )
      }
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
      //ref={mergeRefs<HTMLDivElement>(triggerRef, floatingRef)}
      ref={triggerRef}
    >
      <WithIcons icon={icon} {...extract(props, /^(icon|text)/)}/>
      <div className={safeAreaClass}></div>
    </div>
)

export default DropdownTrigger
