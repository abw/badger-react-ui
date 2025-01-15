import React from 'react'
import { Dropdown } from '@/src/index'

// PRETEND: import { DropdownMenu } from '@abw/badger-react-ui

const DropdownMenuExample = () =>
  /* START */
  <Dropdown
    content='Hello World!'
    icon='cog'
    iconRotate={90}
  />
  /* END */

export default DropdownMenuExample