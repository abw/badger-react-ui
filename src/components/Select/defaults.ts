import {
  SELECT_CLASS, SELECT_PLACEHOLDER, SELECT_SEARCH_FIELD_CLASS,
  SELECT_SEARCH_PLACEHOLDER, SELECT_SEARCH_PREFIX_CLASS,
  SELECT_SEARCH_SUFFIX_CLASS, SELECT_SUFFIX_ICON
} from './Constants'
import {
  ACTIVE_CLASS, CLEAR_CLASS, CLEAR_ICON, CLOSED_CLASS, DISABLED_CLASS,
  HEADING_CLASS, INPUT_CLASS, INPUTS_CLASS, MENU_CLASS, NO_OPTIONS,
  NONE_CLASS, OPEN_CLASS, OPTION_CLASS, PLACEHOLDER_CLASS, SEARCH_ICON,
  SELECTED_CLASS, SEPARATOR_CLASS, SUFFIX_CLASS
} from '@/src/constants'
import {
  validOption as defaultValidOption,
  findOption as defaultFindOption,
  defaultRenderer, WithIconsRenderer,
} from '@/src/utils'

export const selectDefaults = {
  closeOnSelect:     true,
  search:            false,
  selectClass:       SELECT_CLASS,
  placeholder:       SELECT_PLACEHOLDER,
  placeholderClass:  PLACEHOLDER_CLASS,
  suffixClass:       SUFFIX_CLASS,
  suffixIcon:        SELECT_SUFFIX_ICON,
  inputsClass:       INPUTS_CLASS,
  inputClass:        INPUT_CLASS,
  // triggerClass   = DROPDOWN_TRIGGER_CLASS,
  // bodyClass      = DROPDOWN_MENU_BODY_CLASS,
  menuClass:         MENU_CLASS,
  openClass:         OPEN_CLASS,
  closedClass:       CLOSED_CLASS,
  optionClass:       OPTION_CLASS,
  noOptions:         NO_OPTIONS,
  noOptionsClass:    NONE_CLASS,
  activeClass:       ACTIVE_CLASS,
  selectedClass:     SELECTED_CLASS,
  disabledClass:     DISABLED_CLASS,
  headingClass:      HEADING_CLASS,
  separatorClass:    SEPARATOR_CLASS,
  // search
  searchPlaceholder: SELECT_SEARCH_PLACEHOLDER,
  searchFieldClass:  SELECT_SEARCH_FIELD_CLASS,
  searchInputsClass: INPUTS_CLASS,
  searchPrefixClass: SELECT_SEARCH_PREFIX_CLASS,
  searchSuffixClass: SELECT_SEARCH_SUFFIX_CLASS,
  searchClearClass:  CLEAR_CLASS,
  searchIcon:        SEARCH_ICON,
  clearSearchIcon:   CLEAR_ICON,
  //displayOption   = withIconsRenderer,
  //displayValue    = withIconsRenderer,
  //displayHeading  = withIconsRenderer,
  displayValue:      defaultRenderer('displayValue') as WithIconsRenderer,
  displayOption:     defaultRenderer('displayOption') as WithIconsRenderer,
  displayHeading:    defaultRenderer('displayHeading') as WithIconsRenderer,
  findOption:        defaultFindOption,
  validOption:       defaultValidOption,
  debugPrefix:       'Select > ',
}