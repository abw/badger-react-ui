/* eslint-disable indent */
import { useMemo, useState } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { capitalFirstLetter } from '@/src/utils/text'

export type UseComplexStateValues = Record<string, unknown>
export type UseComplexStateOptions<Values> = {
  onChange?: UseComplexStateOnChange<Values>
  convertCase?: (word: string) => string
  setterNamer?: (key: string) => string
}
export type UseComplexStateOnChange<Values> = (values: Values) => Values
export type UseComplexValueSet<T> = (value: T) => void
export type UseComplexValueFn<T> = (fn: (value: T) => T) => void
export type UseComplexSetter<T> = UseComplexValueSet<T> & UseComplexValueFn<T>

export type UseComplexValuesSetters<Values> = {
  [Property in keyof Values as `set${Capitalize<string & Property>}`]-?:
    UseComplexSetter<Values[Property]>
};

export const useComplexState = <
  Values extends UseComplexStateValues = UseComplexStateValues,
  Setters = UseComplexValuesSetters<Values>,
>(
  values: Values,
  options: UseComplexStateOptions<Values>={ }
) : [Values, Setters] => {
  const {
    onChange,
    convertCase = capitalFirstLetter,
    setterNamer = key => `set${convertCase(key)}`
  } = options

  const initialValues = useMemo(
    () => {
      const initialValues = onChange
        ? onChange(values)
        : values
      return initialValues
    },
    [values, onChange]
  )
  const [state, setState] = useState<Values>(initialValues)

  const setters = Object.keys(values).reduce(
    (setters, key: keyof Values) => {
      const setter = setterNamer(String(key)) as keyof Setters
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