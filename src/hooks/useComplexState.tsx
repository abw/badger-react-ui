import { useState } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { capitalFirstLetter } from '@/src/utils/text'

export type UseComplexStateValues = Record<string, unknown>
export type UseComplexStateOptions = {
  onChange?: (values: UseComplexStateValues) => UseComplexStateValues
  convertCase?: (word: string) => string
  setterNamer?: (key: string) => string
}

export const useComplexState = (
  values: UseComplexStateValues,
  options: UseComplexStateOptions={ }
) => {
  const {
    onChange,
    convertCase = capitalFirstLetter,
    setterNamer = key => `set${convertCase(key)}`
  } = options
  const [state, setState] = useState(
    onChange
      ? onChange(values)
      : values
  )

  const setters = Object.keys(values).reduce(
    (setters, key) => {
      const setter = setterNamer(key)
      setters[setter] = (value: unknown) => setState(
        oldState => {
          const newState = {
            ...oldState,
            [key]: maybeFunction(value, oldState[key])
          }
          return onChange
            ? onChange(newState)
            : newState
        }
      )
      return setters
    },
    { } as UseComplexStateValues
  )
  return [state, setters]
}

export default useComplexState