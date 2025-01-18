import Context from './Context'
import SearchResult from './Result'
import SearchNoResults from './NoResults'
import { resultKey } from './Utils'
import { hasValue, isArray } from '@abw/badger-utils'
import { SEARCH_RESULTS_CLASS } from './Constants'

export const SearchResults = Context.Consumer(
  ({
    results,
    resultsRef,
    cursor,
    selectResult,
    setCursor,
    resultsClass=SEARCH_RESULTS_CLASS,
    Result=SearchResult,
    NoResults=SearchNoResults,
  }) =>
    <div className={resultsClass} ref={resultsRef}>
      { (isArray(results) && results.length)
        ? results.map(
          (result, n: number) =>
            <Result
              result={result}
              active={hasValue(cursor) && results[cursor] === result}
              key={resultKey(result, n)}
              onClick={() => selectResult(result)}
              onMouseEnter={() => setCursor(n)}
            />
        )
        : <NoResults/>
      }
    </div>
)

export default SearchResults
