import Context from './Context'
import { SEARCH_NO_RESULTS, SEARCH_NO_RESULTS_CLASS } from './Constants'

export const SearchNoResults = Context.Consumer(
  ({
    noResults=SEARCH_NO_RESULTS,
    noResultsClass=SEARCH_NO_RESULTS_CLASS
  }) =>
    <div className={noResultsClass}>
      {noResults}
    </div>
)

export default SearchNoResults
