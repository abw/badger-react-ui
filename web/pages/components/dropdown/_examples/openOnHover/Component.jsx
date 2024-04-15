import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown openOnHover'
    content='Hello World!'
    openOnHover={true}
  />
  /* END */

export default DropdownExample