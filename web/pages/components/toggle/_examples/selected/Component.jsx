import { Toggle } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Toggle } from '@abw/badger-react-ui

const ToggleExample = () => {
  const [selected, setSelected] = React.useState(0)
  const options = [
    {
      text:     'Love',
      iconLeft: 'thumb-up'
    },
    {
      text:     'Hate',
      iconLeft: 'thumb-down'
    },
  ]
  return (
    <Toggle
      options={options}
      selected={selected}
      onSelect={(option, n) => setSelected(n)}
    />
  )
}

export default ToggleExample