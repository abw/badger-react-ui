import React from 'react'
import UISearch from '@/components/Search/Search.jsx'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'

const Search = ({
  field=useField(),
  selectValue=field.selectValue || identity
}) =>
  <UISearch
    {...field}
    onSelect={option => field.onChange(selectValue(option))}
    onClear={() => field.setValue(null)}
  />

export default Search