import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () => {
  return (
    <Dropdown
      text='Dropdown Menu'
      onLoad={d => d.open()}
      items={[
        { text: 'Item One'   },
        { text: 'Item Two'   },
        { text: 'Item Three' },
      ]}
    />
  )
}

export default DropdownExample