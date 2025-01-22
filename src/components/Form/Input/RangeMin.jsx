import React from 'react'
import UIRangeMin from '@/components/RangeMin/RangeMin'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'

const RangeMin = ({
  field=useField(),
  changeValue=field.changeValue || identity
}) =>
  <UIRangeMin
    {...field}
    onChange={(...args) => field.onChange(changeValue(...args))}
  />

export default RangeMin