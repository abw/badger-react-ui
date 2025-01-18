import Context from './Context'
import Icon from '@/components/Icon/Icon'
import {
  SEARCH_CLEAR_ICON, SEARCH_INPUT_CLASS, SEARCH_INPUT_TYPE,
  SEARCH_INPUTS_CLASS, SEARCH_PLACEHOLDER, SEARCH_PREFIX_CLASS,
  SEARCH_SEARCH_ICON, SEARCH_SEARCHING_ICON, SEARCH_SUFFIX_CLASS
} from './Constants'

export const SearchInput = Context.Consumer(
  ({
    input,
    onFocus,
    onBlur,
    onChange,
    clear,
    autocomplete,
    autoComplete=autocomplete,
    placeholder=SEARCH_PLACEHOLDER,
    clearIcon=SEARCH_CLEAR_ICON,
    searchIcon=SEARCH_SEARCH_ICON,
    searchingIcon=SEARCH_SEARCHING_ICON,
    inputsClass=SEARCH_INPUTS_CLASS,
    prefixClass=SEARCH_PREFIX_CLASS,
    suffixClass=SEARCH_SUFFIX_CLASS,
    inputType=SEARCH_INPUT_TYPE,
    inputClass=SEARCH_INPUT_CLASS,
    disabled,
    searching,
  }) =>
    <div className={inputsClass}>
      <div className={prefixClass}>
        <Icon name={searchIcon}/>
      </div>
      <input
        type={inputType}
        placeholder={placeholder}
        value={input}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        className={inputClass}
        autoComplete={autoComplete}
      />
      <div className={suffixClass} onClick={disabled ? undefined : clear}>
        <Icon name={searching ? searchingIcon : clearIcon}/>
      </div>
    </div>
)

export default SearchInput
