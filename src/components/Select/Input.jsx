import React    from 'react'
import Context  from './Context.js'
import { hasValue } from '@abw/badger-utils'

const SelectInput = ({
  input,
  onFocus,
  onBlur,
  onClick,
  placeholder='Select',
  placeholderClass='placeholder',
  inputClass='input',
  disabled,
}) =>
  <div
    onFocus={onFocus}
    onBlur={onBlur}
    onClick={onClick}
    disabled={disabled}
    className={inputClass}
    tabIndex={0}
  >
    { hasValue(input)
      ? <>{input}</>
      : <span className={placeholderClass}>{placeholder}</span>
    }
  </div>

export default Context.Consumer(SelectInput)
