import React    from 'react'
import Context  from './Context.js'
import Icon     from '../Icon/Icon.jsx'
import { hasValue } from '@abw/badger-utils'

const Input = ({
  input,
  onFocus,
  onBlur,
  onClick,
  placeholder='Select',
  placeholderClass='placeholder',
  inputsClass='inputs',
  inputClass='input',
  suffixClass='suffix',
  disabled,
}) =>
  <div
    className={inputsClass}
    onClick={disabled ? null : onClick}
  >
    <div
      onFocus={disabled ? null : onFocus}
      onBlur={disabled ? null : onBlur}
      disabled={disabled}
      className={inputClass}
      tabIndex={0}
    >
      { (hasValue(input) && input.length)
        ? <>{input}</>
        : <span className={placeholderClass}>{placeholder}</span>
      }
      {/* NB: &nbsp; to prevent strange line spacing */}
      &nbsp;
    </div>
    <div className={suffixClass}>
      <Icon name="angle-down"/>
    </div>
  </div>

export const SelectInput = Context.Consumer(Input)
export default SelectInput
