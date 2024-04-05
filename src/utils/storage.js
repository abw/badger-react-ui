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
    get: key    => JSON.parse(
      Store.getItem(prefixKey(prefix, key))
    ),
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
