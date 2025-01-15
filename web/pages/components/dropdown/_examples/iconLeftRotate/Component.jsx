import React from 'react'
import { Dropdown } from '@/src/index'

// PRETEND: import { DropdownMenu } from '@abw/badger-react-ui

const DropdownMenuExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconLeftRotate'
    content='Hello World!'
    iconLeft='angle-right'
    iconLeftRotate={90}
  />
  /* END */

export default DropdownMenuExample