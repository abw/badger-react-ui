import UIRange from '@/components/Range/Range'
import { useField } from '@abw/badger-form'
import { InputRangeChangeValue, InputRangeFieldExtras } from '../types'

const defaultChangeValue: InputRangeChangeValue = (
  min: number,
  max: number
) => [min, max]

const Range = () => {
  const {
    changeValue = defaultChangeValue,
    onChange,
    ...props
  } = useField<InputRangeFieldExtras>()

  return (
    <UIRange
      {...props}
      onChange={
        (...args) => onChange(
          changeValue(...args)
        )
      }
    />
  )
}

export default Range