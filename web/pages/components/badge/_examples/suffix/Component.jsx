import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      suffix="Suffix"
      text="Badge"
    />
    <Badge
      suffix="Suffix"
      text="Badge"
      color="teal"
      radius={0}
    />
    <Badge
      suffix="Suffix"
      text="Badge"
      size="smaller"
      color="blue"
      compact
    />
  </div>
/* END */

export default Component
