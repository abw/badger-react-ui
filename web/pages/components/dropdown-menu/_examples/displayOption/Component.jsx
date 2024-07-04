import React from 'react'
import { DropdownMenu } from '@/src/index.jsx'

const DropdownMenuExample = () =>
  /* START */
  <DropdownMenu
    text='Dropdown Menu'
    iconRight="angle-down"
    options={[
      { text: 'Nine',   about: 'Not loud enough' },
      { text: 'Ten',    about: 'Loud' },
      { text: 'Eleven', about: 'One louder' },
    ]}
    displayOption={
      option =>
        <div>
          <div className="large weight-500">
            {option.text}
          </div>
          <div className="smaller weight-300">
            {option.about}
          </div>
        </div>
    }
  />
  /* END */

export default DropdownMenuExample