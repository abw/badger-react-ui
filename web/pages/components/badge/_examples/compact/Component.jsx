import React from 'react'
import { Badge } from '@/src/index'

const Component = () =>
/* START */
  <div className="flex wrap gap-4">
    <Badge
      text="Danger"
      color="red"
      compact
    />
    <Badge
      text="Warning"
      color="orange"
      compact
    />
    <Badge
      text="New"
      color="green"
      compact
    />
    <Badge
      text="Cool"
      color="blue"
      compact
    />
  </div>
/* END */

export default Component
