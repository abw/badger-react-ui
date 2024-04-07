import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    storageKey="badger-tabset-demo"
    lined solid color="orange"
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