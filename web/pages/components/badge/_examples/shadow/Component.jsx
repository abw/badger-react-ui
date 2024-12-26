import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      text="Shadow 1"
      color="indigo"
      shadow
    />
    <Badge
      text="Shadow 2"
      color="violet"
      shadow={2}
    />
    <Badge
      text="Shadow 3"
      color="purple"
      shadow={3}
    />
    <Badge
      text="Shadow 4"
      color="pink"
      shadow={4}
    />
    <Badge
      text="Shadow 5"
      color="maroon"
      shadow={5}
    />
  </div>
/* END */

export default Component
