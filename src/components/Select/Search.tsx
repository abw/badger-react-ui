import Context  from './Context'
import Icon     from '@/components/Icon/Icon'
import { classes } from '@/src/utils/classes'

export const SelectSearch = Context.Consumer(
  ({
    searchInput,
    focusSearch,
    blurSearch,
    searchRef,
    setSearch,
    clearSearch,
    searchPlaceholder,
    searchFieldClass,
    searchInputsClass,
    searchPrefixClass,
    searchSuffixClass,
    searchClearClass,
    inputClass,
    searchIcon,
    clearSearchIcon,
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
