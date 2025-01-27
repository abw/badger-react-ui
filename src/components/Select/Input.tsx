import Context  from './Context'
import Icon from '@/components/Icon/Icon'
import { hasValue } from '@abw/badger-utils'

export const SelectInput = Context.Consumer(
  ({
    value,
    onFocus,
    onBlur,
    onClick,
    placeholder,
    placeholderClass,
    inputsClass,
    inputClass,
    suffixClass,
    suffixIcon,
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
