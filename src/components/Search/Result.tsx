import Context from './Context'
import { classes } from '@/src/utils/classes'
import { RenderableValue } from '@/src/utils/renderer'
import { SearchResultProps } from './types'
import { SEARCH_ACTIVE_CLASS, SEARCH_RESULT_CLASS } from './Constants'

export const SearchResult = Context.Consumer<SearchResultProps>(
  ({
    result,
    active,
    activeRef,
    onClick,
    onMouseEnter,
    displayResult,
    resultClass=SEARCH_RESULT_CLASS,
    activeClass=SEARCH_ACTIVE_CLASS
  }) =>
    <div
      className={classes(resultClass, { [activeClass]: active })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      ref={active ? activeRef : null}
    >
      { displayResult(result as RenderableValue) }
    </div>
)

export default SearchResult
