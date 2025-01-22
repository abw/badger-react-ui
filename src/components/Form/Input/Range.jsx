import React from 'react'
import UIRange from '@/components/Range/Range'
import { useField } from '@abw/badger-form'

const defaultChangeValue = (min, max) => [min, max]

const Range = ({
  field=useField(),
  changeValue=field.changeValue || defaultChangeValue
}) =>
  <UIRange
    {...field}
    onChange={(...args) => field.onChange(changeValue(...args))}
  />

export default Range