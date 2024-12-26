import React from 'react'
import UISelect from '@/components/Select/Select.jsx'
import { useField } from '@abw/badger-form'
import { identity, doNothing } from '@abw/badger-utils'

const Select = ({
  field=useField(),
  selectValue=field.selectValue || identity
}) =>
  <UISelect
    {...field}
    onUpdate={field.onUpdate || doNothing}
    onSelect={option => field.onChange(selectValue(option))}
  />

export default Select