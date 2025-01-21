import Context  from './Context'
import Icon     from '@/components/Icon/Icon'
import { classes } from '@/src/utils/classes'
import { INPUTS_CLASS } from '@/src/constants'
import {
  SELECT_CLEAR_SEARCH_ICON, SELECT_INPUT_CLASS, SELECT_SEARCH_CLEAR_CLASS,
  SELECT_SEARCH_FIELD_CLASS, SELECT_SEARCH_ICON, SELECT_SEARCH_PLACEHOLDER,
  SELECT_SEARCH_PREFIX_CLASS, SELECT_SEARCH_SUFFIX_CLASS
} from './Constants'

export const SelectSearch = Context.Consumer(
  ({
    searchInput,
    focusSearch,
    blurSearch,
    searchRef,
    setSearch,
    clearSearch,
    searchPlaceholder=SELECT_SEARCH_PLACEHOLDER,
    searchFieldClass=SELECT_SEARCH_FIELD_CLASS,
    searchInputsClass=INPUTS_CLASS,
    searchPrefixClass=SELECT_SEARCH_PREFIX_CLASS,
    searchSuffixClass=SELECT_SEARCH_SUFFIX_CLASS,
    searchClearClass=SELECT_SEARCH_CLEAR_CLASS,
    inputClass=SELECT_INPUT_CLASS,
    searchIcon=SELECT_SEARCH_ICON,
    clearSearchIcon=SELECT_CLEAR_SEARCH_ICON,
  }) =>
    <div className={searchFieldClass}>
      <div className={searchInputsClass}>
        <div className={searchPrefixClass}>
          <Icon
            name={searchIcon}
          />
        </div>
        <input
          ref={searchRef}
          className={inputClass}
          type="text"
          placeholder={searchPlaceholder}
          value={searchInput ?? ''}
          onClick={e => e.stopPropagation()}
          onChange={e => setSearch(e.target.value)}
          onFocus={focusSearch}
          onBlur={blurSearch}
          autoComplete="chrome-is-broken"
          tabIndex={0}
        />
        <div
          className={classes(searchSuffixClass, searchInput ? searchClearClass : null)}
          onClick={clearSearch}
        >
          <Icon
            name={clearSearchIcon}
          />
        </div>
      </div>
    </div>
)

export default SelectSearch
