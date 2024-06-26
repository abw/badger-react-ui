import React from 'react'
import { WithIcons } from '@/src/index.jsx'

// PRETEND: import { WithIcons } from '@abw/badger-react-ui

const WithIconsExample = () =>
  <div className="grid-1 gap-2">
    {/* START */}
    <div className="flex middle">
      <WithIcons
        text="Your Profile"
        iconLeft="user"
        iconLeftClass="red fgc-50 larger"
      />
    </div>
    {/* END */}
  </div>

export default WithIconsExample