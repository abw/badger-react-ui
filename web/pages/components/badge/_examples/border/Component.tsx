import { Badge } from '@/src/index'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Badge
      text="Border 2"
      color="red"
      border={2}
    />
    <Badge
      text="Border 3"
      color="brown"
      border={3}
    />
    <Badge
      text="Border 4"
      color="orange"
      border={4}
    />
    <Badge
      text="Border 5"
      color="yellow"
      border={5}
    />
  </div>
/* END */

export default Component
