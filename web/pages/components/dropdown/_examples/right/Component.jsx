import React from 'react'
import { Dropdown } from '@/src/index'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Right'
    content='Hello World!'
    right
  />
  /* END */

export default DropdownExample