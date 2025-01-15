import React from 'react'
import { Dropdown } from '@/src/index'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown iconRightRotate'
    content='Hello World!'
    iconRight='angle-left'
    iconRightRotate={-90}
  />
  /* END */

export default DropdownExample