import React from 'react'
import { Tabset } from '@/src/index'

const TabsetExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Tabset
      solid
      tabs={[
        { text: 'Ten', content: 'Quite loud' },
        { text: 'Eleven', content: 'One louder' },
      ]}
    />
    <Tabset
      solid lined
      tabs={[
        { text: 'Ten', content: 'Quite loud' },
        { text: 'Eleven', content: 'One louder' },
      ]}
    />
    {/* END */}
  </div>

export default TabsetExample