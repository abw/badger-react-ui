import React from 'react'
import { Dropdown } from '@/src/index'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconLeft'
    content='Hello World!'
    iconLeft='angle-down'
  />
  /* END */

export default DropdownExample