import React from 'react'
import { Dropdown } from '@/src/index'

// PRETEND: import { DropdownMenu } from '@abw/badger-react-ui

const DropdownMenuExample = () =>
  <div className="flex space middle">
    {/* START */}
    <Dropdown
      text="Menu"
      iconLeft="angle-right"
      iconLeftRotate={90}
      content='Hello World!'
      button
      triggerColor="teal"
    />
    <Dropdown
      icon="bars"
      content='Hello World!'
      button
      triggerColor="blue"
      triggerSize="small"
    />
    <Dropdown
      text="Menu"
      iconRight="angle-left"
      iconRightRotate={-90}
      content='Hello World!'
      button
      triggerColor="indigo"
      triggerSize="smaller"
      right
    />
    {/* END */}
  </div>

export default DropdownMenuExample