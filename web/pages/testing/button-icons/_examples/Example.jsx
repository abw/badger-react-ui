import React from 'react'
import { Button } from '@/src/index'

const Example = () =>
  <div>
    <div className="flex wrap gap-4 largest green">
      <Button
        icon="search"
      />
      <Button
        text="Icon on Left"
        iconLeft="search"
      />
      <Button
        text="Icon on Right"
        iconRight="search"
      />
    </div>
    <div className="flex wrap gap-4 largest blue mar-t-4">
      <Button
        icon="search plus-shrink=4"
      />
      <Button
        text="Icons on Left"
        iconLeft="search plus-thicker-shrink=6-up=1.3-left=1.5"
      />
      <Button
        text="Icons on Right"
        iconRight="search minus-thicker-shrink=6-up=1.3-left=1.5"
      />
    </div>
  </div>

export default Example