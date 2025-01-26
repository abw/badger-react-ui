import React from 'react'
import { Dropdown } from '@/src/index'

const DropdownExample = () =>
  <Dropdown
    text="Dropdown"
    content="Hello World"
    triggerColor="blue"
    openOnHover
    button
  />

export default DropdownExample