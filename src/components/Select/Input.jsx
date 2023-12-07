import React    from 'react'
import Context  from './Context.js'
import { hasValue } from '@abw/badger-utils'
import Icon from '../Icon/Icon.jsx'

const SelectInput = ({
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
    onClick={onClick}
  >
    <div
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      className={inputClass}
      tabIndex={0}
    >
      { hasValue(input)
        ? <>{input}</>
        : <span className={placeholderClass}>{placeholder}</span>
      }
    </div>
    <div className={suffixClass}>
      <Icon name="angle-down"/>
    </div>
  </div>

export default Context.Consumer(SelectInput)
