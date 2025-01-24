import { DROPDOWN_BODY_CLASS } from './Constants'
import Context from './Context'
// import { DropdownBodyProps } from './types'

export const DropdownBody = Context.Consumer(
  ({
    bodyClass = DROPDOWN_BODY_CLASS,
    onMouseEnter,
    onMouseLeave,
    bodyRef,
    bodyStyle,
    content,
  }) =>
    <div
      className={bodyClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={bodyRef}
      style={bodyStyle}
    >
      {content||'No content defined'}
    </div>
)

export default DropdownBody