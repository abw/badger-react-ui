import React, { useState } from 'react'
import { Storage } from '@/src/index.jsx'
import { doNothing } from '@abw/badger-utils'
import Toggle, { defaultToggleOptions, selectedToggleIndex } from './Toggle.jsx'

const useToggle = ({
  selected=0,
  findSelectedIndex=selectedToggleIndex,
  options=defaultToggleOptions,
  onSelect=doNothing,
  storageKey,
  storageItem='selected',
  ...props
} = { }) => {
  const selectedIndex = findSelectedIndex(options, selected)
  const store = storageKey && Storage(storageKey)
  const [index, setIndex] = useState(
    store
      ? store.get(storageItem) ?? selectedIndex
      /* v8 ignore next */
      : selectedIndex
  )
  const [option, setOption] = useState(
    options[index]
  )
  const selectOption = option => {
    const n = findSelectedIndex(options, option)
    if (n >= 0 && n < options.length) {
      if (store) {
        store.set(storageItem, n)
      }
      setIndex(n)
      setOption(options[n])
      onSelect(options[n], n)
    }
    /* v8 ignore start */
    else {
      throw('Invalid toggle option selected: ' + JSON.stringify(option))
    }
    /* v8 ignore end */
  }
  const toggleOption = () =>
    selectOption((index + 1) % options.length)

  return [
    option,
    ({ ...moreProps }) =>
      <Toggle
        options={options}
        selected={index}
        onSelect={(option, n) => selectOption(n)}
        {...props}
        {...moreProps}
      />,
    selectOption,
    toggleOption
  ]
}

export default useToggle