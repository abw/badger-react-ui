import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      prefix="Prefix"
      text="Badge"
    />
    <Badge
      prefix="Prefix"
      text="Badge"
      color="olive"
      radius={0}
    />
    <Badge
      prefix="Prefix"
      text="Badge"
      size="smaller"
      color="green"
      compact
    />
  </div>
/* END */

export default Component
