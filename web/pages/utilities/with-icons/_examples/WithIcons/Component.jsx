import { WithIcons } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { WithIcons } from '@abw/badger-react-ui

const WithIconsExample = () =>
  <div className="grid gap-4">
    <WithIcons text="Hello World!"/>
    <div>
      <WithIcons text="Nigel Tufnel" iconLeft="user"/>
    </div>
    <div>
      <WithIcons text="David St. Hubbins" iconRight="user"/>
    </div>
    <div>
      <WithIcons
        text="Call Me!"
        iconLeft="phone"
        iconLeftClass="beat on-left"
        iconRight="user"
        iconRightClass="red fgc-50 on-right"
      />
    </div>
    <div>
      <WithIcons
        text="Call Me!"
        iconLeft={{ name: 'phone', color: 'green-50' }}
      />
    </div>
  </div>

export default WithIconsExample