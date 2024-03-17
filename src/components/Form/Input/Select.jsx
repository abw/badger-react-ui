import React from 'react'
import UISelect from '@/components/Select/Select.jsx'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'

const Select = ({
  field=useField(),
  selectValue=field.selectValue || identity
}) =>
  <UISelect
    {...field}
    onSelect={option => field.onChange(selectValue(option))}
    /* First approach - selectively extracting options.  This might be wiser
    ** in the long run to prevent any conflicts, but the list below is
    ** incomplete.  e.g. missing displayOption, displayValue, searchOptions,
    ** noOptions, openOnHover, closeOnBlur, closeDelay, event handlers, CSS
    ** classes, etc.
    { ...extract(
      field,
      'value options search disabled placeholder onFocus onBlur onClick onOpen onClose'
    )}
    */
  />

export default Select