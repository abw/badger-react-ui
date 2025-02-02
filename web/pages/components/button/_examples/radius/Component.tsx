import { Button } from '@/src/index'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Button
      text="Radius 0"
      color="olive"
      radius={0}
    />
    <Button
      text="Radius 2"
      color="green"
      radius={2}
    />
    <Button
      text="Radius 4"
      color="teal"
      radius={3}
    />
    <Button
      text="Radius 6"
      color="blue"
      radius={4}
    />
  </div>
/* END */

export default Component
