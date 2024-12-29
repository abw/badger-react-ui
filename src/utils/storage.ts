import { hasValue } from '@abw/badger-utils'
import { PropsObject } from '../types'

export function LocalStorage() {
  let store: PropsObject = { }
  return {
    clear: () => store = { },
    getItem: (key: string) => store[key],
    setItem: (key: string, value: unknown) => (store[key] = value),
    removeItem: (key: string) => delete store[key],
  }
}

export const Store = (typeof window !== 'undefined' && window.localStorage)
  || LocalStorage()

export const prefixKey = (
  prefix: string,
  key: string
) =>
  [prefix, key].join('-')

export function Storage(prefix: string) {
  return {
    get: (key: string, defaultValue?: unknown) => {
      const value = Store.getItem(
        prefixKey(prefix, key)
      )
      if (hasValue(value)) {
        return JSON.parse(value as string)
      }
      if (hasValue(defaultValue)) {
        Store.setItem(
          prefixKey(prefix, key),
          JSON.stringify(defaultValue)
        )
        return defaultValue
      }
      return null
    },
    set: (key: string, value: unknown) => Store.setItem(
      prefixKey(prefix, key),
      JSON.stringify(value)
    ),
    delete: (key: string) => Store.removeItem(
      prefixKey(prefix, key)
    ),
  }
}

export default Storage
