import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Placement'
    content='Hello World!'
    placement="top-start"
  />
  /* END */

export default DropdownExample