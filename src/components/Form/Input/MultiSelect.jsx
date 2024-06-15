import React from 'react'
import UIMultiSelect from '@/components/MultiSelect/MultiSelect.jsx'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'

const MultiSelect = ({
  field=useField(),
  selectValue=field.selectValue || identity
}) =>
  <UIMultiSelect
    {...field}
    onChange={
      values => {
        const expanded = values.map(selectValue)
        console.log(`expanded: `, expanded)
        field.onChange(expanded)
      }
      //values => field.onChange(
      //  values.map(selectValue)
      //)
    }
  />

export default MultiSelect