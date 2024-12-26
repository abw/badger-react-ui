import React from 'react'
import { WithIcons } from '@/src/index.jsx'

// PRETEND: import { WithIcons } from '@abw/badger-react-ui

const WithIconsExample = () =>
  <div className="grid-1 gap-2">
    {/* START */}
    <div>
      <WithIcons
        text="Your Profile"
        iconRight="user"
      />
    </div>
    <div>
      <WithIcons
        text="Your Profile"
        iconRight={{ name: 'user', color: 'green-50' }}
      />
    </div>
    {/* END */}
  </div>

export default WithIconsExample