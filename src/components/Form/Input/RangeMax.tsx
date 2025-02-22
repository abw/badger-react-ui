import UIRangeMax from '@/components/RangeMax/RangeMax'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'
import { InputRangeMaxFieldExtras } from '../types'

const RangeMax = () => {
  const {
    changeValue = identity,
    onChange,
    ...props
  } = useField<InputRangeMaxFieldExtras>()

  return (
    <UIRangeMax
      {...props}
      onChange={
        (...args) => onChange(
          changeValue(...args)
        )
      }
    />
  )
}

export default RangeMax