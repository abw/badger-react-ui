import React from 'react'
import Context from './Context.js'
import SearchResult from './Result.jsx'
import SearchNoResults from './NoResults.jsx'
import { hasValue, isArray } from '@abw/badger-utils'

const SearchResults = ({
  results,
  resultsRef,
  cursor,
  selectResult,
  setCursor,
  resultsClass='menu border bdr-1',
  Result=SearchResult,
  NoResults=SearchNoResults,
}) =>
  <div className={resultsClass} ref={resultsRef}>
    { (isArray(results) && results.length)
      ? results.map(
        (result, n) =>
          <Result
            result={result}
            active={hasValue(cursor) && results[cursor] === result}
            key={result.id ?? result.value ?? n}
            onClick={() => selectResult(result)}
            onMouseEnter={() => setCursor(n)}
          />
      )
      : <NoResults/>
    }
  </div>

export default Context.Consumer(SearchResults)
