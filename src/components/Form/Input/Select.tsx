import UISelect from '@/components/Select/Select'
import { useField } from '@abw/badger-form'
import { identity, doNothing } from '@abw/badger-utils'
import { InputSelectFieldExtras } from '../types'

const Select = () => {
  const {
    selectValue = identity,
    onUpdate = doNothing,
    value,
    onChange,
    ...props
  } = useField<InputSelectFieldExtras>()
  return (
    <UISelect
      {...props}
      value={value ?? undefined}
      onUpdate={onUpdate}
      onSelect={option => onChange(selectValue(option))}
    />
  )
}

export default Select