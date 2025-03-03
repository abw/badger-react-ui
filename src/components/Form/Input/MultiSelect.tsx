import UIMultiSelect from '@/components/MultiSelect/MultiSelect'
import { useField } from '@abw/badger-form'
import { identity, hasValue, isArray } from '@abw/badger-utils'
import { doNothing } from '@abw/badger-utils'
import { InputSelectFieldExtras } from '../types'

const MultiSelect = () => {
  const {
    selectValue = identity,
    onUpdate = doNothing,
    value,
    onChange,
    ...props
  } = useField<InputSelectFieldExtras>()

  return (
    <UIMultiSelect
      {...props}
      // @ts-ignore-error.  I'm giving up
      values={
        hasValue(value)
          ? isArray(value)
            ? value
            : String(value).length
              ? [value]
              : [ ]
          : [ ]
      }
      // @ts-ignore-error.  Really had enough of this shit
      onUpdate={onUpdate}
      onChange={
        values => onChange(
          values.map(selectValue)
        )
      }
    />
  )
}

export default MultiSelect