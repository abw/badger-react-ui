import React   from 'react'
import Context from './Context.js'

const Body = ({
  bodyClass='body border bdr-1',
  onMouseEnter,
  onMouseLeave,
  floatingRef,
  floatingStyle,
  content,
}) =>
  <div
    className={bodyClass}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    ref={floatingRef}
    style={floatingStyle}
  >
    {content||'No content defined'}
  </div>

export const DropdownBody = Context.Consumer(Body)
export default DropdownBody