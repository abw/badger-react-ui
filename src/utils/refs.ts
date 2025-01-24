//From: https://github.com/wojtekmaj/merge-refs
// import type * as React from 'react'

/**
 * A function that merges React refs into one.
 * Supports both functions and ref objects created using createRef() and useRef().
 *
 * Usage:
 * ```tsx
 * <div ref={mergeRefs(ref1, ref2, ref3)} />
 * ```
 *
 * @param {(React.Ref<T> | undefined)[]} inputRefs Array of refs
 * @returns {React.Ref<T> | React.RefCallback<T>} Merged refs
 */
/*
export function mergeRefs<T>(
  ...inputRefs: (React.Ref<T> | undefined)[]
): React.Ref<T> | React.RefCallback<T> {
  const filteredInputRefs = inputRefs.filter(Boolean)

  if (filteredInputRefs.length <= 1) {
    const firstRef = filteredInputRefs[0]
    return firstRef || null
  }

  return function mergedRefs(ref) {
    for (const inputRef of filteredInputRefs) {
      if (typeof inputRef === 'function') {
        inputRef(ref)
      } else if (inputRef) {
        (inputRef as React.MutableRefObject<T | null>).current = ref
      }
    }
  }
}
*/

// From https://github.com/gregberge/react-merge-refs
export function mergeRefs<T = unknown>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach(
      ref => {
        if (typeof ref === 'function') {
          ref(value)
        }
        else if (ref != null) {
          (ref as React.MutableRefObject<T | null>).current = value
        }
      }
    )
  }
}