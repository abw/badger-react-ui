import React from 'react'
import { Dropdown } from '@/src/index'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconRight'
    content='Hello World!'
    iconRight='angle-down'
  />
  /* END */

export default DropdownExample