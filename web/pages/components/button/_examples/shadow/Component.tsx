import { Button } from '@/src/index'

const Component = () =>
/* START */
  <div className="flex middle wrap gap-4">
    <Button
      text="Shadow 1"
      color="indigo"
      outline
      shadow
    />
    <Button
      text="Shadow 2"
      color="violet"
      outline
      shadow={2}
    />
    <Button
      text="Shadow 3"
      color="purple"
      outline
      shadow={3}
    />
    <Button
      text="Shadow 4"
      color="pink"
      outline
      shadow={4}
    />
    <Button
      text="Shadow 5"
      color="maroon"
      outline
      shadow={5}
    />
  </div>
/* END */

export default Component
