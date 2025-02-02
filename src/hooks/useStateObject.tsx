/* eslint-disable indent */
import { useMemo, useState } from 'react'
import { isFunction, maybeFunction } from '@abw/badger-utils'
import { capitalFirstLetter } from '../utils'
// import { capitalFirstLetter } from '@/src/utils/text'
// import { UseComplexValuesSetters } from './useComplexState'

export type UseStateObjectValues = Record<string, unknown>
export type UseStateObjectSetValues<Values> = Partial<Values>
export type UseStateObjectSetFn<Values> = (oldValues: Values) => Partial<Values>
export type UseStateObjectSetChanges<Values> =
  UseStateObjectSetValues<Values> |
  UseStateObjectSetFn<Values>
export type UseStateObjectSetter<Values> =
  (changes: UseStateObjectSetChanges<Values>) => void

export type UseStateObjectOptions<Values> = {
  onChange?: UseStateObjectOnChange<Values>
  convertCase?: (word: string) => string
  setterNamer?: (key: string) => string
}
export type UseStateObjectOnChange<Values> = (
  newValues: Values,
  oldValues: Values
) => Values


export type UseStateObjectValueSet<T> = (value: T) => void
export type UseStateObjectValueFn<T> = (fn: (value: T) => T) => void
export type UseStateObjectValueSetter<T> = UseStateObjectValueSet<T> & UseStateObjectValueFn<T>

export type UseStateObjectValueSetters<Values> = {
  [Property in keyof Values as `set${Capitalize<string & Property>}`]-?:
    UseStateObjectValueSetter<Values[Property]>
};

export const useStateObject = <
  Values extends UseStateObjectValues = UseStateObjectValues
>(
  values: Values,
  options: UseStateObjectOptions<Values>={ }
): [Values, UseStateObjectSetter<Values>, UseStateObjectValueSetters<Values>] => {
  type Setter = UseStateObjectSetter<Values>
  type Setters =  UseStateObjectValueSetters<Values>

  const {
    onChange,
    // convertCase = capitalFirstLetter,
    // setterNamer = key => `set${convertCase(key)}`
  } = options

  const initialValues = useMemo(
    () => onChange
      ? onChange(values, { } as Values)
      : values,
    [values, onChange]
  )
  const [state, setState] = useState<Values>(initialValues)

  const changeState: Setter = (changes: UseStateObjectSetChanges<Values>) => setState(
    oldValues => {
      const newValues = isFunction<UseStateObjectSetFn<Values>>(changes)
        ? { ...oldValues, ...changes(oldValues) }
        : { ...oldValues, ...changes }
      // The onChange handler can return the old values if they don't want
      // them to change, or perhaps if they've determined that they're
      // different objects but with equivalent properties
      return onChange
        ? onChange(newValues, oldValues)
        : newValues
    }
  )

  const setters: Setters = Object
    .keys(values)
    .reduce(
      (setters, key) => {
        const setterName = `set${capitalFirstLetter(key)}` as keyof Setters
        // @ts-expect-error - FIXME!
        setters[setterName] = (newValue: unknown) => changeState(
          oldState => ({
            ...oldState,
            [key]: maybeFunction(newValue, oldState[key])
          })
        )
        return setters
      },
      { } as Setters
    )

  return [state, changeState, setters]
}

export default useStateObject