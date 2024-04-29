import { isFunction } from '@abw/badger-utils'

// Based on https://github.com/gregberge/react-merge-refs
export const mergeRefs = refs =>
  value => {
    refs.forEach(
      ref => {
        if (isFunction(ref)) {
          ref(value)
        }
        else if (ref != null) {
          ref.current = value
        }
      }
    )
  }
