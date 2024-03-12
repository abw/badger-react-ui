import React from 'react'
import UISelect from '@/components/Select/Select.jsx'
import { useField } from '@abw/badger-form'
import { extract, identity } from '@abw/badger-utils'

const Select = ({
  field=useField(),
  selectValue=field.selectValue || identity
}) =>
  <UISelect
    { ...extract(
      field,
      'value options search disabled placeholder onFocus onBlur onClick onOpen onClose'
    )}
    onSelect={option => field.onChange(selectValue(option))}
  />

export default Select