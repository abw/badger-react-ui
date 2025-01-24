import { useState } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { capitalFirstLetter } from '@/src/utils/text'

export type UseComplexStateValues = Record<string, unknown>
export type UseComplexStateOptions<Values> = {
  onChange?: UseComplexStateOnChange<Values>
  convertCase?: (word: string) => string
  setterNamer?: (key: string) => string
}
export type UseComplexStateOnChange<Values> = (values: Values) => Values

type ValuesSetters<Values> = {
    [Property in keyof Values as `set${Capitalize<string & Property>}`]: (value: Values[Property]) => void
};

export const useComplexState = <
  Values extends UseComplexStateValues = UseComplexStateValues,
  Setters = ValuesSetters<Values>
>(
  values: Values,
  options: UseComplexStateOptions<Values>={ }
) : [Values, Setters] => {
  const {
    onChange,
    convertCase = capitalFirstLetter,
    setterNamer = key => `set${convertCase(key)}`
  } = options
  const [state, setState] = useState<Values>(
    onChange
      ? onChange(values)
      : values
  )

  const setters = Object.keys(values).reduce(
    (setters, key) => {
      const setter = setterNamer(key)
      // @ts-expect-error - FIXME!
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
    { } as Setters
  )
  return [state, setters]
}

export default useComplexState