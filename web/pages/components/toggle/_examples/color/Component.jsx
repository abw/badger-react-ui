import { Toggle } from '@/src/index.jsx'

import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  return (
  /* START */
    <Toggle
      color="brand"
      selected={selected}
      onSelect={setSelected}
    />
  /* END */
  )
}

export default ToggleExample