import React from 'react'
import { WithIcons } from '@/src/index'

// PRETEND: import { WithIcons } from '@abw/badger-react-ui

const WithIconsExample = () =>
  <div className="grid-1 gap-2">
    {/* START */}
    <div>
      <WithIcons
        text="Your Profile"
        iconLeft="user"
      />
    </div>
    <div>
      <WithIcons
        text="Your Profile"
        iconLeft={{ name: 'user', color: 'green-50' }}
      />
    </div>
    {/* END */}
  </div>

export default WithIconsExample