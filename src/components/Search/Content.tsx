import Context       from './Context'
import SearchInput   from './Input'
import SearchResults from './Results'
import SearchError   from './Error'

export const SearchContent = Context.Consumer(
  ({
    results,
    error,
    onKeyDown,
    Input=SearchInput,
    Results=SearchResults,
    Error=SearchError,
  }) =>
    <div className="search" onKeyDown={onKeyDown}>
      <Input/>
      { Boolean(error) &&
        <Error/>
      }
      { Boolean(results) &&
        <Results/>
      }
    </div>
)

export default SearchContent
