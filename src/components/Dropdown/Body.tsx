import Context from './Context'
import { DropdownBodyProps } from './types'

export const DropdownBody = Context.Consumer<
  DropdownBodyProps
>(
  ({
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
)

export default DropdownBody