import UISearch from '@/components/Search/Search'
import { useField } from '@abw/badger-form'
import { identity } from '@abw/badger-utils'
import { InputSearchFieldExtras } from '../types'

const Search = () => {
  const {
    selectValue = identity,
    setValue,
    onChange,
    value,
    ...props
  } =useField<InputSearchFieldExtras>()
  return (
    // @ts-ignore-error.  Nope, not going there
    <UISearch
      {...props}
      value={value ?? undefined}
      // @ts-ignore-error: CBA
      onSelect={option => onChange(selectValue(option))}
      onClear={() => setValue(null)}
    />
  )
}

export default Search