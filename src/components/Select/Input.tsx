import Context  from './Context'
import Icon from '@/components/Icon/Icon'
import { hasValue } from '@abw/badger-utils'
import { SELECT_PLACEHOLDER, SELECT_SUFFIX_ICON } from './Constants'
import { INPUT_CLASS, INPUTS_CLASS, PLACEHOLDER_CLASS, SUFFIX_CLASS } from '@/src/constants'

export const SelectInput = Context.Consumer(
  ({
    value,
    onFocus,
    onBlur,
    onClick,
    placeholder=SELECT_PLACEHOLDER,
    placeholderClass=PLACEHOLDER_CLASS,
    inputsClass=INPUTS_CLASS,
    inputClass=INPUT_CLASS,
    suffixClass=SUFFIX_CLASS,
    suffixIcon=SELECT_SUFFIX_ICON,
    displayValue,
    disabled,
  }) =>
    <div
      className={inputsClass}
      onClick={disabled ? undefined : onClick}
    >
      <div
        onFocus={disabled ? undefined : onFocus}
        onBlur={disabled ? undefined : onBlur}
        // disabled={disabled}
        className={inputClass}
        tabIndex={0}
      >
        { hasValue(value)
          ? (displayValue(value) ?? <>&nbsp;</>)
          : <span className={placeholderClass}>{placeholder}</span>
        }
      </div>
      <div className={suffixClass}>
        <Icon name={suffixIcon}/>
      </div>
    </div>
)

export default SelectInput
