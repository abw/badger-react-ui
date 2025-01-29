import React from 'react'
import UIMultiSelect from '@/components/MultiSelect/MultiSelect'
import { useField } from '@abw/badger-form'
import { identity, hasValue, isArray } from '@abw/badger-utils'
import { doNothing } from '@abw/badger-utils'

const MultiSelect = ({
  field=useField(),
  selectValue=field.selectValue || identity
}) =>
  <UIMultiSelect
    {...field}
    values={
      hasValue(field.value)
        ? isArray(field.value)
          ? field.value
          : field.value.length
            ? [field.value]
            : [ ]
        : [ ]
    }
    onUpdate={field.onUpdate || doNothing}
    onChange={
      values => field.onChange(
        values.map(selectValue)
      )
    }
  />

export default MultiSelect