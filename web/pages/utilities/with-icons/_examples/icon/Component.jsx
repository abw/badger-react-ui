import React from 'react'
import { WithIcons } from '@/src/index.jsx'

// PRETEND: import { WithIcons } from '@abw/badger-react-ui

const WithIconsExample = () =>
  <div className="grid-1 gap-2">
    {/* START */}
    <div>
      <WithIcons
        icon="user"
      />
    </div>
    <div>
      <WithIcons
        icon={{ name: 'user', color: 'red-50', size: 'x3' }}
      />
    </div>
    {/* END */}
  </div>

export default WithIconsExample