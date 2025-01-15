import { useState } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { capitalFirstLetter } from '@/src/utils/text'

export const useComplexState = (values, options={ }) => {
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
      setters[setter] = value => setState(
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
    { }
  )
  return [state, setters]
}

export default useComplexState