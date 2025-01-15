import React from 'react'
import { WithIcons } from '@/src/index'

// PRETEND: import { WithIcons } from '@abw/badger-react-ui

const WithIconsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <div>
      <WithIcons
        text="Some text"
      />
    </div>
    <div>
      <WithIcons>
        Some more text
      </WithIcons>
    </div>
    {/* END */}
  </div>

export default WithIconsExample