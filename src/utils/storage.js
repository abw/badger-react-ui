import { hasValue } from '@abw/badger-utils'

function LocalStorage() {
  let store = { }
  return {
    clear: () => (store = {}),
    getItem: key => store[key],
    setItem: (key, value) => (store[key] = value),
    removeItem: key => delete store[key],
  }
}

export const Store = (typeof window !== 'undefined' && window.localStorage)
  || LocalStorage()

export const prefixKey = (prefix, key) => [prefix, key].join('-')

export function Storage(prefix) {
  return {
    get: (key, defaultValue) => {
      const value = Store.getItem(
        prefixKey(prefix, key)
      )
      if (hasValue(value)) {
        return JSON.parse(value)
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
    set: (key, value) => Store.setItem(
      prefixKey(prefix, key),
      JSON.stringify(value)
    ),
    delete: key => Store.removeItem(
      prefixKey(prefix, key)
    ),
  }
}

export default Storage
