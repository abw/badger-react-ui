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
      : selectedIndex
  )
  const [option, setOption] = useState(
    options[index]
  )
  const selectOption = n => {
    if (store) {
      store.set(storageItem, n)
    }
    setIndex(n)
    setOption(options[n])
    onSelect(options[n], n)
  }
  return [
    option,
    ({ ...moreProps }) =>
      <Toggle
        options={options}
        selected={index}
        onSelect={(option, n) => selectOption(n)}
        {...props}
        {...moreProps}
      />
  ]
}

export default useToggle