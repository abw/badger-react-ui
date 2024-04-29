import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { DropdownMenu } from '@abw/badger-react-ui

const DropdownMenuExample = () =>
  /* START */
  <Dropdown
    text="Menu"
    iconLeft="angle-right"
    iconLeftRotate={90}
    content='Hello World!'
    button
    triggerColor="blue"
    triggerSize="small"
  />
  /* END */

export default DropdownMenuExample