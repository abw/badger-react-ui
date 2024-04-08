import { useState } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { capitalFirstLetter } from '../utils/text.js'

export const useComplexState = (values, options={ }) => {
  const { onChange } = options
  const [state, setState] = useState(
    onChange
      ? onChange(values)
      : values
  )

  const setters = Object.keys(values).reduce(
    (setters, key) => {
      const setter = `set${capitalFirstLetter(key)}`
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