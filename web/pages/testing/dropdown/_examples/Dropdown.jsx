import React from 'react'
import { Dropdown } from '@/src/index'

const DropdownExample = () =>
  <Dropdown
    text="Trigger Text"
    content="Hello World"
    triggerColor="blue"
    openOnHover
    button
  />

export default DropdownExample