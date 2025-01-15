import { ToggleState } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { ToggleState } from '@abw/badger-react-ui

const ToggleStateExample = () =>
  <ToggleState
    options={[
      { text: 'Hot',  color: 'red'  },
      { text: 'Cold', color: 'blue' },
    ]}
    onSelect={
      option =>
        console.log(`You selected ${option.text}`)
    }
    storageKey="bru-toggle-temperature"
  />

export default ToggleStateExample