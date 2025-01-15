import React          from 'react'
import Context        from './Context.js'
import WithIcons      from '@/components/Icon/WithIcons'
import { extract }    from '@abw/badger-utils'
import { mergeRefs }  from '@/src/utils/refs'
import { classes }    from '@/src/utils/classes'

const Trigger = ({
  triggerClass='trigger',
  triggerRef,
  triggerColor,
  triggerSize,
  button,
  icon,
  floatingRef,
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
    className={classes(triggerClass, triggerColor, triggerSize, { button, icon })}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onKeyDown={onKeyDown}
    onFocus={onFocus}
    onBlur={onBlur}
    tabIndex={0}
    ref={mergeRefs([triggerRef, floatingRef])}
  >
    <WithIcons icon={icon} {...extract(props, /^(icon|text)/)}/>
    <div className={safeAreaClass}></div>
  </div>

export default Context.Consumer(Trigger)