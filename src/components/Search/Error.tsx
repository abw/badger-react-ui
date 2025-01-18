import Context from './Context'
import { SEARCH_ERROR_CLASS, SEARCH_RESULTS_CLASS } from './Constants'

export const SearchError = Context.Consumer(
  ({
    error,
    resultsClass=SEARCH_RESULTS_CLASS,
    errorClass=SEARCH_ERROR_CLASS,
  }) =>
    <div className={resultsClass}>
      <div className={errorClass}>
        {error}
      </div>
    </div>
)

export default SearchError
