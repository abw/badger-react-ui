import React from 'react'
import { WithIcons } from '@/src/index'

// PRETEND: import { WithIcons } from '@abw/badger-react-ui

const WithIconsExample = () =>
  <div className="grid-1 gap-2">
    {/* START */}
    <div className="flex middle">
      <WithIcons
        text="Your Profile"
        iconRight="user"
        iconRightClass="red fgc-50 larger"
      />
    </div>
    {/* END */}
  </div>

export default WithIconsExample