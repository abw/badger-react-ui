import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    activeTab={1}
    tabs={[
      {
        text: 'Ten',
        content: 'Quite loud'
      },
      {
        text: 'Eleven',
        content: 'One louder'
      },
    ]}
  />
/* END*/

export default TabsetExample