import { capitalize, maybeFunction } from '@abw/badger-utils'
import { useState } from 'react'

export const useComplexState = (values, options={ }) => {
  const { onChange } = options
  const [state, setState] = useState(
    onChange
      ? onChange(values)
      : values
  )

  const setters = Object.keys(values).reduce(
    (setters, key) => {
      const setter = `set${capitalize(key)}`
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