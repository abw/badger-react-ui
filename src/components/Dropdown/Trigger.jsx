import React    from 'react'
import Context  from './Context.js'
import WithIcons from '../Icon/WithIcons.jsx'
import { extract } from '@abw/badger-utils'

const Trigger = ({
  triggerClass='trigger',
  triggerRef,
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
    className={triggerClass}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onKeyDown={onKeyDown}
    onFocus={onFocus}
    onBlur={onBlur}
    tabIndex={0}
    ref={triggerRef}
  >
    <WithIcons {...extract(props, /^(icon|text)/)}/>
    <div className={safeAreaClass}></div>
  </div>

export default Context.Consumer(Trigger)