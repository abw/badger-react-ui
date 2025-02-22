import UIRangeMin from '@/components/RangeMin/RangeMin'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'
import { InputRangeMinFieldExtras } from '../types'

const RangeMin = () => {
  const {
    changeValue = identity,
    onChange,
    ...props
  } = useField<InputRangeMinFieldExtras>()

  return (
    <UIRangeMin
      {...props}
      onChange={
        (...args) => onChange(
          changeValue(...args)
        )
      }
    />
  )
}

export default RangeMin