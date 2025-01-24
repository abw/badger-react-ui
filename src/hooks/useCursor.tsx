// import { useState } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { hasValue, } from '@abw/badger-utils'
import {
  debugFunction, DebugOptions, SelectOption,
  validOption as defaultValidOption,
} from '../utils'

export type UseCursorProps<T=SelectOption> = DebugOptions & {
  cursor?: number
  options?: T[],
  validOption?: (option: SelectOption) => boolean
}

export const noIndexToNull = (index: number) =>
  index < 0
    ? null
    : index

export const useCursor = ({
  cursor: initialCursor,
  options,
  validOption = defaultValidOption,
  debugPrefix = 'Cursor > ',
  ...props
}: UseCursorProps) => {
  const debug = debugFunction({ debugPrefix, ...props })
  // debug('useCursor()', props)

  const [cursor, setCursor] = useState<number|undefined|null>(initialCursor)

  const clearCursor = () => setCursor(null)

  const setCursorFirst = () => setCursor(
    firstIndex()
  )
  const setCursorLast = () => setCursor(
    lastIndex()
  )
  const setCursorNext = () => setCursor(
    cursor => nextIndex(cursor)
  )
  const setCursorPrev = () => setCursor(
    cursor => prevIndex(cursor)
  )

  const setCursorIndex = (index: number) => setCursor(
    clampCursorIndex(index)
  )

  const firstIndex = useCallback(
    () => {
      if (! hasValue(options)) {
        return null
      }
      const index = noIndexToNull(options.findIndex(validOption))
      debug(
        index === null
          ? `No valid first item found`
          : `First valid index is ${index}`
      )
      return index
    },
    [options, validOption, debug]
  )

  const lastIndex = useCallback(
    () => {
      if (! hasValue(options)) {
        return null
      }
      const index = noIndexToNull(options.findLastIndex(validOption))
      debug(
        index === null
          ? `No valid last item found`
          : `Last valid index is ${index}`
      )
      return index
    },
    [options, validOption, debug]
  )

  const nextIndex = useCallback(
    (cursor?: number | null) => {
      debug(`looking for next valid index after ${cursor}`)
      if (! hasValue(options) || ! hasValue(cursor)) {
        return null
      }
      for (let i = 1; i <= options.length; i++) {
        const n = (cursor + i) % options.length
        if (validOption(options[n])) {
          debug(`setting cursor to ${n}`)
          return n
        }
      }
      return null
    },
    [options, validOption, debug]
  )

  const prevIndex = useCallback(
    (cursor?: number | null) => {
      debug(`looking for previous valid index before ${cursor}`)
      if (! hasValue(options) || ! hasValue(cursor)) {
        return null
      }
      for (let i = 1; i <= options.length; i++) {
        const n = (cursor + options.length - i) % options.length
        if (validOption(options[n])) {
          debug(`setting cursor to ${n}`)
          return n
        }
      }
      return null
    },
    [options, validOption, debug]
  )

  const clampCursorIndex = useCallback(
    (cursor?: number | null) => {
      if (! hasValue(options) || ! hasValue(cursor)) {
        return null
      }
      if (cursor < 0) {
        debug(`cursor (${cursor}) < 0, setting to first index`)
        return firstIndex()
      }
      if (cursor >= options.length) {
        debug(`cursor (${cursor}) >= options.length (${options.length}), setting to last index`)
        return lastIndex()
      }
      if (! validOption(options[cursor])) {
        debug(`current cursor (${cursor}) does not index a valid option, looking for the next one`)
        return nextIndex(cursor)
      }
      // debug(`cursor (${cursor}) is valid`)
      return cursor
    },
    [options, firstIndex, lastIndex, nextIndex, validOption, debug]
  )

  const clampCursor = useCallback(
    () => setCursor(
      cursor => clampCursorIndex(cursor)
    ),
    [clampCursorIndex]
  )

  // When the options change (or the clampCursor function which might be
  // regenerated if validOption changes, for example) then we must check that
  // any current cursor is within the range of options and is a valid option.
  // Otherwise we should attempt to clamp it to the range.
  useEffect(
    () => {
      clampCursor()
    },
    [options, clampCursor]
  )


  return {
    options, cursor, setCursor, clearCursor,
    firstIndex, lastIndex, nextIndex, prevIndex,
    setCursorFirst, setCursorLast, setCursorNext, setCursorPrev, setCursorIndex
  }
}

/* TODO

export type DropdownContextProps = ContextProps<{
  onLoad?: ThisCallback
  onUnload?: ThisCallback
}>

*/