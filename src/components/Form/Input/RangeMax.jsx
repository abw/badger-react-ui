import React from 'react'
import UIRangeMax from '@/components/RangeMax/RangeMax.jsx'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'

const RangeMax = ({
  field=useField(),
  changeValue=field.changeValue || identity
}) =>
  <UIRangeMax
    {...field}
    onChange={(...args) => field.onChange(changeValue(...args))}
  />

export default RangeMax