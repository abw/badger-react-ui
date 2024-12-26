import React from 'react'
import { Tabset } from '@/src/index.jsx'

const TabsetExample = () =>
/* START */
  <Tabset
    right
    solid lined color="blue"
    tabs={[
      { text: 'Ten', content: 'Quite loud' },
      { text: 'Eleven', content: 'One louder' },
    ]}
  />
/* END */

export default TabsetExample